import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Start Your Project</h1>
          <p className="text-lg text-slate-600">
            Have a question or a project in mind? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email us</p>
                    <p className="text-lg font-semibold text-slate-900">info@techdeployers.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Call us</p>
                    <p className="text-lg font-semibold text-slate-900">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Visit us</p>
                    <p className="text-lg font-semibold text-slate-900">123 Tech Avenue, Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-200">
              <h3 className="text-2xl font-bold mb-4">Need urgent help?</h3>
              <p className="text-blue-100 mb-6">Our support team is available 24/7 for all our existing clients.</p>
              <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
              {isSubmitted ? (
                <div className="text-center py-20 space-y-6">
                  <div className="inline-block p-6 bg-green-50 text-green-600 rounded-full">
                    <CheckCircle size={64} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-lg text-slate-600">Thank you for reaching out. We will get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center group shadow-lg shadow-blue-200"
                  >
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
