import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-xl font-bold text-blue-400">SNAP</div>
              <div className="text-xl font-bold text-white">FORGE</div>
            </div>
            <p className="mb-6">
              Full-service digital marketing agency offering affordable
              solutions for startups and small businesses.
            </p>
            <div className="flex space-x-4">
              {["📘", "📓", "📱", "📔"].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Website Development",
                "Search Engine Optimization",
                "Graphic Designing",
                "Social Media Marketing",
                "Legal Compliance",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span>📍</span>
                <span>123 Business Avenue, Tech District</span>
              </li>
              <li className="flex items-start space-x-3">
                <span>📱</span>
                <span>+91 8630605029</span>
              </li>
              <li className="flex items-start space-x-3">
                <span>✉️</span>
                <span>info@snapforgeitsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 SnapForge IT Solutions. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
