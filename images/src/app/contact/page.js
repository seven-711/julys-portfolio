"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaTiktok, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import TextType from '@/components/TextType';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ 
    loading: false, 
    success: false, 
    error: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      await emailjs.send(
        'service_dxqji5i', // Replace with your EmailJS service ID
        'template_mzp06xh', // Replace with your EmailJS template ID
        formData,
        'Kuarz5fE5rbNt1SK7' // Replace with your EmailJS public key
      );
      
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <div className="container mt-16 space-y-12 py-12 overflow-x-hidden">
      <div className="text-center space-y-6" data-aos="fade-up">
        <div className="relative inline-block">
          <TextType 
            text={["Get In Touch"]}
            typingSpeed={85}
            pauseDuration={1500}
            showCursor={true}
            className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] bg-clip-text text-transparent font-extrabold text-4xl md:text-6xl"
          />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <p className="text-[var(--muted)] text-lg md:text-xl leading-relaxed">
            Have a <span className="font-medium text-white">question</span> or want to <span className="font-medium text-white">work together</span>? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="absolute -z-10 w-32 h-32 bg-[#40ffaa]/10 rounded-full -top-10 -left-10 blur-3xl"></div>
          <div className="absolute -z-10 w-40 h-40 bg-[#4079ff]/10 rounded-full -bottom-12 -right-10 blur-3xl"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-8" data-aos="fade-right">
          <div className="glassmorphism p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaPaperPlane className="text-[#40ffaa]" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#40ffaa] to-[#4079ff] text-white">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm text-[var(--muted)]">Email</h3>
                  <a 
                    href="mailto:claridadjulyfranz@gmail.com" 
                    className="text-[var(--text)] hover:text-[#40ffaa] transition-colors"
                  >
                    claridadjulyfranz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#ff40aa] to-[#ff8f40] text-white">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm text-[var(--muted)]">Phone</h3>
                  <a 
                    href="tel:+639169026848" 
                    className="text-[var(--text)] hover:text-[#40ffaa] transition-colors"
                  >
                    +63 916 902 6848
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#4079ff] to-[#aa40ff] text-white">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm text-[var(--muted)]">Location</h3>
                  <p className="text-[var(--text)]">Cagayan de Oro City, Philippines</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 text-[#E1306C] group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5 text-[#000000] dark:text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glassmorphism p-8 rounded-2xl border border-white/10" data-aos="fade-left">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <SiGmail className="text-[#EA4335]" />
            Send Me a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-[var(--muted)]">
                  Your Name *
                </label>
                <div className="relative">
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-10 rounded-xl border border-white/10 bg-white/5 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[#40ffaa]/50 transition-all"
                      placeholder="John Doe"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[var(--muted)]">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-10 rounded-xl border border-white/10 bg-white/5 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[#40ffaa]/50 transition-all"
                    placeholder="johndoe@example.com"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-[var(--muted)]">
                Your Message *
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-10 rounded-xl border border-white/10 bg-white/5 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[#40ffaa]/50 transition-all"
                  placeholder="How can I help you?"
                ></textarea>
                <div className="absolute left-3 top-4 text-[var(--muted)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-medium hover:opacity-90 transition-opacity ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
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
            </div>

            {status.success && (
              <div className="p-4 text-sm text-green-400 bg-green-900/20 rounded-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {status.error && (
              <div className="p-4 text-sm text-red-400 bg-red-900/20 rounded-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {status.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}