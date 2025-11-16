'use client';

import React, { useState, Children, useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Step({ children }) {
  return <div className="w-full">{children}</div>;
}

export default function VerticalStepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const steps = Children.toArray(children);
  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps;
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('auto');

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.offsetHeight}px`);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setDirection(1);
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      onStepChange(nextStep);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      onStepChange(prevStep);
    }
  };

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>
      
      <div className="space-y-32 py-12">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = true; // All steps are always visible
          
          return (
            <div 
              key={stepNumber} 
              className="relative pl-24 min-h-[500px]"
            >
              {/* Step indicator */}
              <div 
                className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center text-lg font-medium border-2 transition-all duration-300 ${
                  isActive 
                    ? 'border-blue-500 bg-blue-500 text-white' 
                    : 'border-gray-300 dark:border-gray-600 text-gray-400'
                }`}
                style={{
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  left: '32px'
                }}
              >
                {stepNumber}
              </div>
              
              {/* Content */}
              <div className="w-full h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  {step}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
