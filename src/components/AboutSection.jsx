import React from "react";



export default function AboutSection() {
    return (
      <section id="about" className="py-8 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="p-6 md:p-10 rounded-2xl bg-gray-800">
                <img
                  className="mx-auto w-full max-w-[400px] md:max-w-[500px] object-contain"
                  src="/model.png"
                  alt="digital laptop"
                />
              </div>
            </div>
  
            {/* Text Section */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                About SnapForge IT Solutions
              </h2>
  
              <p className="text-lg text-gray-300 mb-6">
                We're a full-service digital marketing agency dedicated to helping
                startups and small businesses grow through expert digital solutions
                tailored to their unique goals.
              </p>
  
              <p className="text-lg text-gray-300 mb-8">
                Our team combines creativity with technical expertise to deliver
                affordable marketing solutions that drive real results and help
                our clients thrive in the digital landscape.
              </p>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-400">
                    Our Mission
                  </h4>
                  <p className="text-gray-400">
                    To empower businesses with innovative digital solutions that
                    drive growth.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-400">
                    Our Vision
                  </h4>
                  <p className="text-gray-400">
                    To be the go-to partner for businesses seeking digital
                    excellence.
                  </p>
                </div>
              </div>
  
              <button className="px-6 py-3 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 transition-colors text-white">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  