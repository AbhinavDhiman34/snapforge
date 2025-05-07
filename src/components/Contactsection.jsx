import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setState] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally submit to Google Forms
    // Replace the URL below with your actual Google Form action URL
    const googleFormURL = "https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse";
    
    // For demonstration purposes, we're simulating submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setState({ name: "", phone: "", service: "", message: "" });
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const services = [
    "SEO",
    "Web Development",
    "App Development",
    "Social Media Marketing",
    "Content Creation",
    "Graphic Designing",
    "Logo Designing",
    "Legal Compliance",
    "Business Assistance & Consultancy",
    "Instagram/Facebook/LinkedIn Ads",
    "Grow Your Business Online"
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading with enhanced styling */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Get In Touch
          </h2>
          <div className="h-1 w-24 mx-auto rounded bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Ready to transform your digital presence? Contact us today for a free consultation.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form with enhanced styling */}
          <div className="w-full lg:w-1/2">
            <div className="p-8 rounded-xl bg-gray-800/80 backdrop-blur-sm shadow-xl border border-gray-700 relative overflow-hidden">
              {/* Background patterns for visual appeal */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-blue-400 relative z-10">Send Us A Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" action="https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse" method="POST" target="_blank">
                {/* Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    name="entry.123456789" // Replace with your Google Form field name
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700/70 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                
                {/* Phone Number */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">Phone Number</label>
                  <input
                    type="tel"
                    name="entry.987654321" // Replace with your Google Form field name
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700/70 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">Service You're Looking For</label>
                  <select
                    name="entry.456789123" // Replace with your Google Form field name
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700/70 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    name="entry.789123456" // Replace with your Google Form field name
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    placeholder="Tell us about your requirements"
                    className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700/70 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] disabled:opacity-70 flex justify-center items-center shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-pulse">Sending...</span>
                  ) : (
                    "Send Message"
                  )}
                </button>
                
                {/* Submission Message */}
                {submitted && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center mt-4">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {/* Note about data security */}
                <div className="text-xs text-gray-400 mt-4 text-center">
                  Your information is secure and will only be used to contact you regarding your inquiry.
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info with enhanced styling */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard 
                icon={<LocationIcon />} 
                title="Our Location" 
                content="123 Business Avenue, Tech District" 
              />
              <InfoCard 
                icon={<PhoneIcon />}
                title="Phone Number" 
                content="+91 8630605029" 
              />
              <InfoCard 
                icon={<EmailIcon />}
                title="Email Address" 
                content="info@snapforgeitsolutions.com" 
              />
              <InfoCard 
                icon={<GlobeIcon />}
                title="Website" 
                content="www.snapforgeitsolutions.com" 
              />
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-lg h-64 bg-gray-800/50 border border-gray-700 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/50"></div>
              <div className="text-center p-4 relative z-10">
                <GlobeIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-300 font-medium">Find us on the map</p>
                <p className="text-gray-400 text-sm mt-2">123 Business Avenue, Tech District</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-bold mb-4 text-lg text-blue-400">Connect With Us</h4>
              <div className="flex flex-wrap gap-4">
                <SocialButton icon={<FacebookIcon />} label="Facebook" />
                <SocialButton icon={<TwitterIcon />} label="Twitter" />
                <SocialButton icon={<InstagramIcon />} label="Instagram" />
                <SocialButton icon={<LinkedInIcon />} label="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for reusable contact info cards with improved styling
function InfoCard({ icon, title, content }) {
  return (
    <div className="p-6 rounded-lg bg-gray-800/80 shadow-md border border-gray-700 backdrop-blur-sm transition-all hover:bg-gray-700/80 hover:shadow-lg group">
      <div className="flex items-start">
        <div className="mr-4 p-3 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500/30 transition-all">
          {icon}
        </div>
        <div>
          <h4 className="font-bold mb-1 text-white">{title}</h4>
          <p className="text-gray-400">{content}</p>
        </div>
      </div>
    </div>
  );
}

// Social button component
function SocialButton({ icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 text-white transition-all transform hover:scale-110 border border-gray-700 flex items-center justify-center shadow-md"
    >
      {icon}
    </a>
  );
}

// Icon components
function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1114.142 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}