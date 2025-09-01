import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { useState } from "react";
import type { ContactMessage } from "@/shared/types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block glass-minimal rounded-full px-8 py-3 animate-fade-in-up">
            <span className="text-purple-400 font-semibold text-lg">Contact</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight animate-fade-in-up delay-100">
            Get In
            <span className="text-purple-400 block mt-2">Touch</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Ready to start your journey? Have questions about our platform? 
            We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in delay-300">
            {/* Main Contact Card */}
            <div className="glass-minimal rounded-3xl p-10 hover-glow transition-smooth">
              <h3 className="text-3xl font-black text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "opportunaworks@gmail.com",
                    href: "mailto:opportunaworks@gmail.com"
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 7007177301",
                    href: "tel:+917007177301"
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "Connect with our founder",
                    href: "https://www.linkedin.com/in/iayushsharma1009/"
                  },
                  {
                    icon: MapPin,
                    label: "Based in",
                    value: "India",
                    href: "#"
                  }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-6 text-gray-300 hover:text-white transition-colors-smooth group"
                  >
                    <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center group-hover:bg-purple-400 transition-colors-smooth animate-float" style={{ animationDelay: `${index * 400}ms` }}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-lg">{item.label}</div>
                      <div className="text-purple-400 font-semibold">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="glass-minimal rounded-3xl p-10 hover-glow transition-smooth">
              <div className="flex items-center space-x-3 mb-8">
                <Clock className="w-8 h-8 text-purple-400 animate-float" />
                <h3 className="text-2xl font-black text-white">Office Hours</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM IST" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM IST" },
                  { day: "Sunday", time: "Closed" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-800 last:border-b-0 group">
                    <span className="font-semibold text-gray-200 text-lg group-hover:text-white transition-colors-smooth">{schedule.day}</span>
                    <span className="text-purple-400 font-bold text-lg">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right delay-400">
            <div className="glass-minimal rounded-3xl p-10 hover-glow transition-smooth">
              <h3 className="text-3xl font-black text-white mb-8">Send us a Message</h3>
              
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="firstName" className="block text-lg font-semibold text-gray-200">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 glass-subtle rounded-xl text-white placeholder-gray-400 focus-ring transition-smooth text-lg"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="lastName" className="block text-lg font-semibold text-gray-200">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 glass-subtle rounded-xl text-white placeholder-gray-400 focus-ring transition-smooth text-lg"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 glass-subtle rounded-xl text-white placeholder-gray-400 focus-ring transition-smooth text-lg"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-3">
                  <label htmlFor="subject" className="block text-lg font-semibold text-gray-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 glass-subtle rounded-xl text-white placeholder-gray-400 focus-ring transition-smooth text-lg"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-3">
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    minLength={10}
                    className="w-full px-6 py-4 glass-subtle rounded-xl text-white placeholder-gray-400 focus-ring transition-smooth resize-none text-lg"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-4 p-6 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 animate-slide-down">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <p className="font-semibold text-lg">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-4 p-6 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 animate-slide-down">
                    <AlertCircle className="w-6 h-6 flex-shrink-0" />
                    <p className="font-semibold text-lg">{errorMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full flex items-center justify-center space-x-3 px-8 py-5 rounded-xl font-bold text-xl transition-smooth hover-lift ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-purple-500 hover:bg-purple-600 text-white shadow-purple-subtle'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin-smooth rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 transition-transform-smooth group-hover:translate-x-1" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
