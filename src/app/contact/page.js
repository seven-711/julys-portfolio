"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

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
    <div className="container space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-2">
          Get In Touch
        </h1>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          Have a question or want to work together? Send me a message!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glassmorphism max-w-2xl mx-auto p-8 rounded-2xl border border-white/10">
        <div className="grid gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-[var(--text)]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[#40ffaa]/50 transition-all"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-[var(--text)]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[#40ffaa]/50 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-[var(--text)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[#40ffaa]/50 transition-all"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status.loading}
              className={`w-full btn ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {status.success && (
            <div className="p-4 text-sm text-green-400 bg-green-900/20 rounded-lg">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          {status.error && (
            <div className="p-4 text-sm text-red-400 bg-red-900/20 rounded-lg">
              {status.error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}