import React from "react";

export default function ServicesSection() {
    const services = [
      {
        title: "Website Development",
        description: "Custom websites built for performance and user experience.",
        icon: "🌐",
      },
      {
        title: "Search Engine Optimization",
        description: "Improve visibility and drive organic traffic to your website.",
        icon: "🔍",
      },
      {
        title: "Graphic Designing",
        description: "Visual identity that makes your brand stand out.",
        icon: "🎨",
      },
      {
        title: "Logo Designing",
        description: "Memorable logos that encapsulate your brand's essence.",
        icon: "✒️",
      },
      {
        title: "Social Media Marketing",
        description: "Engage with your audience on platforms that matter.",
        icon: "📱",
      },
      {
        title: "Content Creation For Brands",
        description: "Compelling content that tells your brand story.",
        icon: "📝",
      },
      {
        title: "Digital Advertising",
        description: "Strategic ads on Google, Facebook, and Instagram.",
        icon: "📣",
      },
      {
        title: "Legal Compliance",
        description: "Ensure your digital presence follows regulatory requirements.",
        icon: "⚖️",
      },
      {
        title: "Business Analysis & Strategy",
        description: "Ensure your Business presence online.",
        icon: "👨‍💻"
      },
    ];
  
    return (
      <section id="services" className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Services
            </h2>
            <div className="h-1 w-20 mx-auto rounded bg-blue-500 mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Comprehensive digital solutions tailored to help startups and small
              businesses grow.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 hover:shadow-blue-900/20 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center">
            <a
              href="/business-plan.pdf"
              download
              className="px-6 py-3 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            >
              Download Business Plan
            </a>
          </div>
        </div>
      </section>
    );
  }
  