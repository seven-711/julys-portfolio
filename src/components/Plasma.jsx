'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { useIsClient } from '@/hooks/useIsClient';

// Helper function to check if WebGL is supported
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;

out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / min(iResolution.x, iResolution.y) * uScale;
  
  // Base plasma effect with more contrast and movement
  float v = 0.0;
  v += sin(uv.x * 3.0 + iTime * 0.7 * uDirection * uSpeed);
  v += sin(uv.y * 3.0 + iTime * 0.5 * uDirection * uSpeed);
  v += sin(uv.x * 4.0 + uv.y * 3.0 + iTime * 0.3 * uDirection * uSpeed);
  v = sin(v * 3.0) * 0.5 + 0.5;
  
  // Add more contrast and color variation
  v = pow(v, 0.5); // More contrast
  
  // Create a more vibrant color pattern
  vec3 col1 = vec3(0.3, 0.6, 1.0); // Blue
  vec3 col2 = vec3(0.9, 0.2, 0.7); // Pink
  vec3 col3 = vec3(0.1, 0.8, 0.9); // Cyan
  
  // Blend colors based on position and time
  vec3 col = mix(col1, col2, smoothstep(0.0, 1.0, sin(iTime * 0.2) * 0.5 + 0.5));
  col = mix(col, col3, smoothstep(0.0, 1.0, sin(iTime * 0.15 + 1.0) * 0.5 + 0.5));
  
  // Apply the plasma pattern
  col = mix(vec3(0.0), col, v * 1.5);
  
  // Apply mouse interaction if enabled
  if (uMouseInteractive > 0.5) {
    vec2 mouse = (uMouse / iResolution.xy) * 2.0 - 1.0;
    mouse.x *= iResolution.x / iResolution.y;
    float dist = distance(uv, mouse);
    col += 0.3 * exp(-dist * 2.0);
  }
  
  // Apply custom color if provided
  if (uUseCustomColor > 0.5) {
    col = mix(col, uCustomColor, 0.9);
  }
  
  // Apply opacity and enhance brightness
  col = pow(col * 1.2, vec3(1.2));
  col *= uOpacity;
  
  fragColor = vec4(col, 1.0);
}
`;

const PlasmaComponent = ({
  color = '#3B82F6',
  speed = 0.6,
  direction = 'forward',
  scale = 1.2,
  opacity = 0.8,
  mouseInteractive = true,
  className = ''
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  const isClient = useIsClient();
  
  useEffect(() => {
    if (!isClient || !canvasRef.current) {
      setWebGLAvailable(false);
      return;
    }
    
    // Check WebGL support
    if (!isWebGLAvailable()) {
      console.warn('WebGL not supported, falling back to CSS background');
      setWebGLAvailable(false);
      return;
    }

    const canvas = canvasRef.current;
    let renderer;
    let frameId;
    
    try {
      renderer = new Renderer({
        canvas,
        width: canvas.clientWidth,
        height: canvas.clientHeight,
        dpr: Math.min(window.devicePixelRatio, 2),
        alpha: true,
        antialias: true,
        premultipliedAlpha: false,
        preserveDrawingBuffer: true
      });
      
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      
      // Create a simple shader program
      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          iResolution: { value: [canvas.width, canvas.height] },
          iTime: { value: 0 },
          uCustomColor: { value: hexToRgb(color) },
          uUseCustomColor: { value: 1.0 },
          uSpeed: { value: speed },
          uDirection: { value: direction === 'forward' ? 1.0 : -1.0 },
          uScale: { value: scale },
          uOpacity: { value: opacity },
          uMouse: { value: [0.5, 0.5] },
          uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 }
        }
      });
      
      // Create a simple triangle that covers the viewport
      const geometry = new Triangle(gl);
      const mesh = new Mesh(gl, { geometry, program });
      
      // Handle window resize
      const handleResize = () => {
        if (!renderer) return;
        
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        
        // Only resize if dimensions have changed
        if (canvas.width !== width || canvas.height !== height) {
          renderer.setSize(width, height);
          program.uniforms.iResolution.value = [width, height];
        }
      };
      
      // Handle mouse movement for interactive effect
      const handleMouseMove = (e) => {
        if (!mouseInteractive || !renderer) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        program.uniforms.uMouse.value = [x, 1.0 - y];
      };
      
      // Animation loop
      const animate = (time) => {
        if (!renderer) return;
        
        program.uniforms.iTime.value = time * 0.001; // Convert to seconds
        
        // Ensure the viewport is set correctly
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        
        // Clear the canvas
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        
        // Render the mesh
        renderer.render({ scene: mesh });
        
        frameId = requestAnimationFrame(animate);
      };
      
      // Initial setup
      handleResize();
      window.addEventListener('resize', handleResize);
      if (mouseInteractive) {
        window.addEventListener('mousemove', handleMouseMove);
      }
      
      // Start animation
      frameId = requestAnimationFrame(animate);
      
      // Cleanup function
      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        
        // Clean up WebGL resources
        if (renderer) {
          renderer.gl.getExtension('WEBGL_lose_context')?.loseContext();
        }
      };
      
    } catch (error) {
      console.error('Error initializing WebGL:', error);
      setWebGLAvailable(false);
    }
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  if (!webGLAvailable) {
    // Fallback to a simple gradient background
    return (
      <div 
        className={`absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 ${className}`}
        style={{
          opacity: 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className={`w-full h-full ${className}`}
        style={{
          opacity: 1,
          transition: 'opacity 0.5s ease-in-out',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </div>
  );
};

// Client-side only component
export default function Plasma(props) {
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    // Return a simple gradient background during SSR
    return (
      <div 
        className={`absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 ${props.className || ''}`}
        style={{
          opacity: 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    );
  }
  
  return <PlasmaComponent {...props} />;
}

// Export the component for testing purposes
export { PlasmaComponent };
