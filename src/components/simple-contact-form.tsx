"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SimpleContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    queryType: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); // Clear any previous errors
    
    try {
      // Create FormData for Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('queryType', formData.queryType);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());

      // Submit to Google Apps Script with no-cors mode
      await fetch('https://script.google.com/macros/s/AKfycbxE5ospEBtv9TYDt-NDbsXsU6Wxh5drH6DdYU_FXfmVY12Yu2Akg4-P3ggpeOT9OBKGHA/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend
      });

      // If we reach here without error, assume success
      // (no-cors mode means we can't read the actual response)
      setIsSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", queryType: "", message: "" });
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Sorry, there was an error submitting your form. Please try again or contact us directly at support@geetcare.ai');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          Your message has been sent successfully. We'll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto" suppressHydrationWarning>
      {/* Error Message */}
      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-700 text-sm">{error}</p>
            <button 
              type="button" 
              onClick={() => setError(null)}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
      
      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Your Name */}
        <div className="space-y-3">
          <Label className="text-base font-medium text-gray-700">
            Your Name*
          </Label>
          <Input
            type="text"
            placeholder="Enter Text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none transition-all duration-200 text-gray-700 placeholder:text-gray-400 text-base"
            required
          />
        </div>

        {/* Email Address */}
        <div className="space-y-3">
          <Label className="text-base font-medium text-gray-700">
            Email Address*
          </Label>
          <Input
            type="email"
            placeholder="Enter Text"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none transition-all duration-200 text-gray-700 placeholder:text-gray-400 text-base"
            required
          />
        </div>

        {/* Choose the type of query */}
        <div className="space-y-3 md:col-span-2">
          <Label className="text-base font-medium text-gray-700">
            Choose the type of query*
          </Label>
          <div className="relative">
            <select
              value={formData.queryType}
              onChange={(e) => handleChange("queryType", e.target.value)}
              className="w-full px-4 py-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none transition-all duration-200 appearance-none cursor-pointer text-gray-700 text-base"
              style={{ color: formData.queryType ? '#374151' : '#9CA3AF' }}
              required
            >
              <option value="">-not selected-</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Mental Health Support">Mental Health Support</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Partnership Opportunities">Partnership Opportunities</option>
              <option value="Crisis Support">Crisis Support</option>
              <option value="Feedback & Suggestions">Feedback & Suggestions</option>
            </select>
            <svg 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Your Query */}
        <div className="space-y-3 md:col-span-2">
          <Label className="text-base font-medium text-gray-700">
            Your Query*
          </Label>
          <Textarea
            placeholder="Type here..."
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={6}
            className="w-full px-4 py-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none transition-all duration-200 resize-none text-gray-700 placeholder:text-gray-400 text-base"
            required
          />
        </div>
      </div>


      {/* Submit Button */}
      <div className="text-center mt-8">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-4 px-16 rounded-md transition-all duration-300 cursor-pointer hover:shadow-lg text-base"
          style={{
            backgroundColor: isSubmitting ? '#9CA3AF' : '#9CA3AF'
          }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
                <path d="M4 12a8 8 0 018-8v8H4z" strokeWidth="4" />
              </svg>
              <span>Sending...</span>
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  );
}
