"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaTiktok, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { SiGmail } from 'react-icons/si';
import TextType from '@/components/TextType';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false
  });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const formRef = useRef(null);
  const honeypotRef = useRef(null);

  // Form validation
  const validateForm = () => {
    // Honeypot check
    if (honeypotRef.current && honeypotRef.current.value) {
      return { valid: false, message: 'Bot detected' };
    }

    // Rate limiting (max 3 submissions per minute)
    const now = Date.now();
    if (now - lastSubmitTime < 10000) { // 10 seconds cooldown
      return { valid: false, message: 'Please wait before submitting again' };
    }

    // Required fields
    if (!formData.name || !formData.email || !formData.message) {
      return { valid: false, message: 'All fields are required' };
    }

    // N  ame validation
    if (formData.name.length > 50) {
      return { valid: false, message: 'Name must be less than 50 characters' };
    }

    if (/\d/.test(formData.name)) {
      return { valid: false, message: 'Name should not contain numbers' };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { valid: false, message: 'Please enter a valid email address' };
    }

    // Message validation
    if (formData.message.length < 10) {
      return { valid: false, message: 'Message is too short' };
    }

    if (formData.message.length > 2000) {
      return { valid: false, message: 'Message is too long' };
    }

    return { valid: true };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateForm();
    if (!validation.valid) {
      toast.error(validation.message || 'Please check your input');
      return;
    }

    setStatus({ loading: true });
    const loadingToast = toast.loading('Sending message...');

    try {
      await emailjs.send(
        "service_dxqji5i",
        "template_mzp06xh",
        formData,
        "Kuarz5fE5rbNt1SK7"
      );

      setLastSubmitTime(Date.now());
      
      // Show success toast
      toast.success('Message sent successfully!', { id: loadingToast });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again later.', { id: loadingToast });
    } finally {
      setStatus({ loading: false });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(17, 24, 39, 0.8)',
            backdropFilter: 'blur(10px)',
            borderLeft: '4px solid #3B82F6',
            borderRadius: '0.5rem',
            padding: '1rem',
            color: 'white',
            maxWidth: '300px',
            width: '100%',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          },
          success: {
            duration: 5000,
            style: {
              borderLeftColor: '#10B981',
              background: 'rgba(16, 185, 129, 0.1)',
              backdropFilter: 'blur(10px)',
            },
            iconTheme: {
              primary: '#10B981',
              secondary: 'white',
            },
          },
          error: {
            duration: 5000,
            style: {
              borderLeftColor: '#EF4444',
              background: 'rgba(239, 68, 68, 0.1)',
              backdropFilter: 'blur(10px)',
            },
            iconTheme: {
              primary: '#EF4444',
              secondary: 'white',
            },
          },
          loading: {
            style: {
              borderLeftColor: '#3B82F6',
              background: 'rgba(59, 130, 246, 0.1)',
              backdropFilter: 'blur(10px)',
            },
            iconTheme: {
              primary: '#3B82F6',
              secondary: 'white',
            },
          },
        }}
      />
      
      <div className="max-w-7xl mx-auto pt-8 md:pt-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="relative inline-block">
            <TextType 
              text={["Get In Touch"]}
              typingSpeed={85}
              pauseDuration={1500}
              showCursor={true}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#4ade80] to-[#3b82f6] bg-clip-text text-transparent"
            />
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Have a <strong className="text-gray-800 dark:text-white">question</strong> or want to <strong className="text-gray-800 dark:text-white">work together</strong>? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-slate-700/50" data-aos="fade-right">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-8">
              <FaPaperPlane className="text-rose-500 mr-3" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyan-100 dark:bg-cyan-500/20 rounded-lg">
                  <FaEnvelope className="text-cyan-600 dark:text-cyan-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</h3>
                  <a 
                    href="mailto:claridadjulyfranz@gmail.com" 
                    className="text-gray-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    claridadjulyfranz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-rose-100 dark:bg-rose-500/20 rounded-lg">
                  <FaPhone className="text-rose-600 dark:text-rose-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</h3>
                  <a 
                    href="tel:+639169026848" 
                    className="text-gray-800 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  >
                    +63 916 902 6848
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-500/20 rounded-lg">
                  <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Location</h3>
                  <p className="text-gray-800 dark:text-white">Cagayan de Oro City, Philippines</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://facebook.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-slate-700/50 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-slate-700/50 rounded-full text-gray-600 dark:text-gray-400 hover:bg-pink-500 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://tiktok.com/@yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-slate-700/50 rounded-full text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-slate-700/50 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-slate-700/50 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-slate-700/50" data-aos="fade-left">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-8">
              <SiGmail className="text-rose-500 mr-3" />
              Send Me a Message
            </h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users but visible to bots */}
              <div className="absolute opacity-0 h-0 w-0 overflow-hidden">
                <input 
                  type="text" 
                  name="website" 
                  ref={honeypotRef}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-200/50 dark:bg-slate-700/50 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-200/50 dark:bg-slate-700/50 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg transition-all"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Your Message *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-10 bg-gray-200/50 dark:bg-slate-700/50 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg transition-all"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2">
                <div className="relative">
                  {/* CSRF Protection */}
                  <input type="hidden" name="_csrf" value={process.env.NEXT_PUBLIC_CSRF_TOKEN} />
                  
                  <button
                    type="submit"
                    disabled={status.loading}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#4ade80] to-[#3b82f6] text-white font-semibold hover:opacity-90 transition-all ${status.loading ? 'opacity-80 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                  >
                    {status.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {/* Rate limiting indicator */}
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                    {lastSubmitTime > 0 && (Date.now() - lastSubmitTime < 20000) ? (
                      <p>Please wait {Math.ceil((20000 - (Date.now() - lastSubmitTime)) / 1000)}s before sending another message</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}