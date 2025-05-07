// import { useState, useEffect, useRef } from "react";
// import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
// import Orb from "./Orb";

// // Main App component
// export default function SnapForgeSPA() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll events
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 10);

//       // Update active section based on scroll position
//       const sections = ["home", "services", "about", "contact"];
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle dark/light mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div
//       className={`${
//         darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//       } min-h-screen transition-colors duration-300`}
//     >
//       <Navbar
//         darkMode={darkMode}
//         toggleDarkMode={toggleDarkMode}
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         activeSection={activeSection}
//         isScrolled={isScrolled}
//       />

//       <main>
//         <HeroSection darkMode={darkMode} />
//         <ServicesSection darkMode={darkMode} />
//         <AboutSection darkMode={darkMode} />
//         <ContactSection darkMode={darkMode} />
//       </main>

//       <Footer darkMode={darkMode} />
//     </div>
//   );
// }

// // Navbar Component
// function Navbar({
//   darkMode,
//   toggleDarkMode,
//   mobileMenuOpen,
//   setMobileMenuOpen,
//   activeSection,
//   isScrolled,
// }) {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: "smooth",
//       });
//     }
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`mb-4 fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "py-2 backdrop-blur-lg bg-opacity-80 shadow-lg " +
//             (darkMode ? "bg-gray-900" : "bg-white")
//           : "py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
//         <div className="flex items-center">
//           <div className="flex items-center space-x-2">
//             <div
//               className={`text-xl font-bold ${
//                 darkMode ? "text-blue-400" : "text-blue-600"
//               }`}
//             >
//               SNAP
//             </div>
//             <div
//               className={`text-xl font-bold ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               FORGE
//             </div>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8">
//           <div className="flex space-x-6">
//             {["home", "services", "about", "contact"].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className={`text-sm font-medium hover:text-blue-500 transition-colors ${
//                   activeSection === item
//                     ? darkMode
//                       ? "text-blue-400"
//                       : "text-blue-600"
//                     : ""
//                 }`}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//             aria-label="Toggle dark mode"
//           >
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>

//           <button
//             className={`px-4 py-2 rounded-lg font-medium ${
//               darkMode
//                 ? "bg-blue-500 hover:bg-blue-600"
//                 : "bg-blue-600 hover:bg-blue-700 text-white"
//             } transition-colors`}
//           >
//             Get Started
//           </button>
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden flex items-center space-x-4">
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//             aria-label="Toggle dark mode"
//           >
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>

//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
//             aria-label="Toggle mobile menu"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       {mobileMenuOpen && (
//         <div
//           className={`md:hidden ${
//             darkMode ? "bg-gray-800" : "bg-white"
//           } p-4 shadow-lg`}
//         >
//           <div className="flex flex-col space-y-4">
//             {["home", "services", "about", "contact"].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className={`p-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors ${
//                   activeSection === item
//                     ? darkMode
//                       ? "text-blue-400"
//                       : "text-blue-600"
//                     : ""
//                 }`}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </button>
//             ))}
//             <button
//               className={`mt-2 px-4 py-2 rounded-lg font-medium ${
//                 darkMode
//                   ? "bg-blue-500 hover:bg-blue-600"
//                   : "bg-blue-600 hover:bg-blue-700 text-white"
//               } transition-colors`}
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// // 3D Animated Hero Section
// function HeroSection({ darkMode }) {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // This would normally contain Three.js animation code
//     // Simplified for this example
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     // Animation frame for the 3D effect
//     let animationId;
//     const animate = () => {
//       // 3D animation logic would go here
//       animationId = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="  relative  pt-20 md:pt-0 min-h-screen flex items-center"
//     >
//       {/* 3D background canvas */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full -z-10"
//       />

//       {/* Gradient overlay */}
//       {/* <div
//         className={`absolute inset-0 ${
//           darkMode
//             ? "bg-gradient-to-br from-gray-900 via-gray-800 to-transparent opacity-90"
//             : "bg-gradient-to-br from-gray-50 via-gray-100 to-transparent opacity-90"
//         }`}
//       ></div> */}

//       <div className="container  mx-auto px-4 md:px-6 relative z-10">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="w-full  pl-10 md:w-1/2 pt-16 md:pt-0">
//             <h1
//               className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Transforming Ideas Into
//               <br />
//               <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
//                 Digital Excellence
//               </span>
//             </h1>
//             <p
//               className={`text-lg md:text-xl mb-8 max-w-lg ${
//                 darkMode ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               Full-service digital marketing solutions for startups and small
//               businesses. Elevate your brand with our expert services.
//             </p>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 className={`px-6 py-3 rounded-lg font-medium ${
//                   darkMode
//                     ? "bg-blue-500 hover:bg-blue-600"
//                     : "bg-blue-600 hover:bg-blue-700 text-white"
//                 } transition-colors text-lg`}
//               >
//                 Get Started
//               </button>
//               <button
//                 className={`px-6 py-3 rounded-lg font-medium ${
//                   darkMode
//                     ? "bg-transparent border border-white hover:bg-gray-800"
//                     : "bg-transparent border border-gray-300 hover:bg-gray-100"
//                 } transition-colors text-lg`}
//               >
//                 Our Services
//               </button>
//             </div>
//           </div>

//           <div className="w-full md:w-1/2 mt-12 md:mt-0">
//             <div className="relative">
//               {/* Decorative elements */}
//               <div
//                 className={`absolute -top-6 -left-6 w-12 h-12 rounded-full ${
//                   darkMode ? "bg-blue-500" : "bg-blue-600"
//                 } opacity-20`}
//               ></div>
//               <div
//                 className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-full ${
//                   darkMode ? "bg-purple-500" : "bg-purple-600"
//                 } opacity-20`}
//               ></div>

//               {/* Hero image or 3D element would go here */}
//               <div
//                 className="p-5 md:p-20 "
//                 // className={`p-4 md:p-8 rounded-2xl shadow-xl ${
//                 //   darkMode
//                 //     ? "bg-gray-800 bg-opacity-50"
//                 //     : "bg-gray-100 bg-opacity-50"
//                 // } backdrop-blur-sm`}
//               >
//                 <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden mx-auto">
//                   {/* Orb animation as background */}
//                   <Orb hue={220} hoverIntensity={0.2} rotateOnHover={true} />

//                   {/* Centered logo */}
//                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                     <img
//                       src="/logo.png"
//                       alt="Logo"
//                       className="w-50 h-50 md:w-100 md:h-100 object-contain" // Increased size here
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Floating brands/partners */}
//         <div className="mt-16 md:mt-2">
//           <p
//             className={`text-center text-sm uppercase mb-4 ${
//               darkMode ? "text-gray-400" : "text-gray-500"
//             }`}
//           >
//             Trusted by innovative brands
//           </p>
//           <div className="flex flex-wrap justify-center gap-8 md:gap-12">
//             {[1, 2, 3, 4, 5].map((item) => (
//               <div
//                 key={item}
//                 className={`h-8 w-24 rounded ${
//                   darkMode ? "bg-gray-700" : "bg-gray-200"
//                 } opacity-50`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
//         <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//           Scroll to explore
//         </p>
//         <div className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${
//           darkMode ? 'border-gray-400' : 'border-gray-500'
//         }`}>
//           <div className={`w-1 h-2 rounded-full animate-bounce ${
//             darkMode ? 'bg-gray-400' : 'bg-gray-500'
//           }`}></div>
//         </div>
//       </div> */}
//     </section>
//   );
// }

// // Services Section
// function ServicesSection({ darkMode }) {
//   const services = [
//     {
//       title: "Website Development",
//       description: "Custom websites built for performance and user experience.",
//       icon: "🌐",
//     },
//     {
//       title: "Search Engine Optimization",
//       description:
//         "Improve visibility and drive organic traffic to your website.",
//       icon: "🔍",
//     },
//     {
//       title: "Graphic Designing",
//       description: "Visual identity that makes your brand stand out.",
//       icon: "🎨",
//     },
//     {
//       title: "Logo Designing",
//       description: "Memorable logos that encapsulate your brand's essence.",
//       icon: "✒️",
//     },
//     {
//       title: "Social Media Marketing",
//       description: "Engage with your audience on platforms that matter.",
//       icon: "📱",
//     },
//     {
//       title: "Content Creation For Brands",
//       description: "Compelling content that tells your brand story.",
//       icon: "📝",
//     },
//     {
//       title: "Digital Advertising",
//       description: "Strategic ads on Google, Facebook, and Instagram.",
//       icon: "📣",
//     },
//     {
//       title: "Legal Compliance",
//       description:
//         "Ensure your digital presence follows regulatory requirements.",
//       icon: "⚖️",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 md:py-32">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-16">
//           <h2
//             className={`text-3xl md:text-4xl font-bold mb-4 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Our Services
//           </h2>
//           <div className="h-1 w-20 mx-auto rounded bg-blue-500 mb-6"></div>
//           <p
//             className={`max-w-2xl mx-auto text-lg ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Comprehensive digital solutions tailored to help startups and small
//             businesses grow.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-xl transition-all duration-300 ${
//                 darkMode
//                   ? "bg-gray-800 hover:bg-gray-750 hover:shadow-blue-900/20"
//                   : "bg-white hover:shadow-xl hover:shadow-blue-100"
//               } hover:-translate-y-1`}
//             >
//               <div
//                 className={`text-4xl mb-4 ${
//                   darkMode ? "text-blue-400" : "text-blue-500"
//                 }`}
//               >
//                 {service.icon}
//               </div>
//               <h3
//                 className={`text-xl font-bold mb-3 ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {service.title}
//               </h3>
//               <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <a
//             href="/business-plan.pdf"
//             download
//             className={`px-6 py-3 rounded-lg font-medium ${
//                 darkMode
//                   ? "bg-blue-500 hover:bg-blue-600"
//                   : "bg-blue-600 hover:bg-blue-700 text-white"
//               } transition-colors`}
//           >
//             Download Business Plan
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// // About Section
// function AboutSection({ darkMode }) {
//   return (
//     <section
//       id="about"
//       className={`py-2 md:py-3 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
//     >
//       <div className="container mx-auto px-2 md:px-6">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
//             <div
//               className={`p-4 md:p-8 rounded-2xl h-auto ${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               }`}
//             >
//               <img
//                 className="my-auto mx-auto w-full max-w-[400px] md:max-w-[500px] object-contain"
//                 src="/model.png"
//                 alt="digital laptop"
//               />
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2 lg:pl-12">
//             <h2
//               className={`text-3xl md:text-4xl font-bold mb-6 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               About SnapForge IT Solutions
//             </h2>

//             <p
//               className={`text-lg mb-6 ${
//                 darkMode ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               We're a full-service digital marketing agency dedicated to helping
//               startups and small businesses grow through expert digital
//               solutions tailored to their unique goals.
//             </p>

//             <p
//               className={`text-lg mb-8 ${
//                 darkMode ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               Our team combines creativity with technical expertise to deliver
//               affordable marketing solutions that drive real results and help
//               our clients thrive in the digital landscape.
//             </p>

//             <div className="grid grid-cols-2 gap-6 mb-8">
//               <div>
//                 <h4
//                   className={`text-xl font-bold mb-2 ${
//                     darkMode ? "text-blue-400" : "text-blue-600"
//                   }`}
//                 >
//                   Our Mission
//                 </h4>
//                 <p
//                   className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
//                 >
//                   To empower businesses with innovative digital solutions that
//                   drive growth.
//                 </p>
//               </div>
//               <div>
//                 <h4
//                   className={`text-xl font-bold mb-2 ${
//                     darkMode ? "text-blue-400" : "text-blue-600"
//                   }`}
//                 >
//                   Our Vision
//                 </h4>
//                 <p
//                   className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
//                 >
//                   To be the go-to partner for businesses seeking digital
//                   excellence.
//                 </p>
//               </div>
//             </div>

//             <button
//               className={`px-6 py-3 rounded-lg font-medium ${
//                 darkMode
//                   ? "bg-blue-500 hover:bg-blue-600"
//                   : "bg-blue-600 hover:bg-blue-700 text-white"
//               } transition-colors`}
//             >
//               Learn More About Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Contact Section
// function ContactSection({ darkMode }) {
//   return (
//     <section id="contact" className="py-20 md:py-32">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-16">
//           <h2
//             className={`text-3xl md:text-4xl font-bold mb-4 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Get In Touch
//           </h2>
//           <div className="h-1 w-20 mx-auto rounded bg-blue-500 mb-6"></div>
//           <p
//             className={`max-w-2xl mx-auto text-lg ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Ready to transform your digital presence? Contact us today for a
//             free consultation.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row">
//           <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
//             <div
//               className={`p-8 rounded-xl ${
//                 darkMode ? "bg-gray-800" : "bg-gray-100"
//               }`}
//             >
//               <h3
//                 className={`text-2xl font-bold mb-4 ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Send Us A Message
//               </h3>

//               <form className="space-y-6">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div>
//                     <label
//                       className={`block mb-2 text-sm font-medium ${
//                         darkMode ? "text-gray-300" : "text-gray-700"
//                       }`}
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       className={`w-full p-3 rounded-lg ${
//                         darkMode
//                           ? "bg-gray-700 border-gray-600 text-white"
//                           : "bg-white border-gray-300 text-gray-900"
//                       } border focus:ring-2 focus:ring-blue-500 outline-none`}
//                     />
//                   </div>
//                   <div>
//                     <label
//                       className={`block mb-2 text-sm font-medium ${
//                         darkMode ? "text-gray-300" : "text-gray-700"
//                       }`}
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className={`w-full p-3 rounded-lg ${
//                         darkMode
//                           ? "bg-gray-700 border-gray-600 text-white"
//                           : "bg-white border-gray-300 text-gray-900"
//                       } border focus:ring-2 focus:ring-blue-500 outline-none`}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     className={`block mb-2 text-sm font-medium ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     className={`w-full p-3 rounded-lg ${
//                       darkMode
//                         ? "bg-gray-700 border-gray-600 text-white"
//                         : "bg-white border-gray-300 text-gray-900"
//                     } border focus:ring-2 focus:ring-blue-500 outline-none`}
//                   />
//                 </div>

//                 <div>
//                   <label
//                     className={`block mb-2 text-sm font-medium ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     rows="4"
//                     className={`w-full p-3 rounded-lg ${
//                       darkMode
//                         ? "bg-gray-700 border-gray-600 text-white"
//                         : "bg-white border-gray-300 text-gray-900"
//                     } border focus:ring-2 focus:ring-blue-500 outline-none`}
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className={`w-full px-6 py-3 rounded-lg font-medium ${
//                     darkMode
//                       ? "bg-blue-500 hover:bg-blue-600"
//                       : "bg-blue-600 hover:bg-blue-700 text-white"
//                   } transition-colors`}
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2 lg:pl-12">
//             <h3
//               className={`text-2xl font-bold mb-6 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Contact Information
//             </h3>

//             <div className="space-y-6">
//               <div
//                 className={`p-6 rounded-lg ${
//                   darkMode ? "bg-gray-800" : "bg-white shadow-md"
//                 }`}
//               >
//                 <div className="flex items-start">
//                   <div
//                     className={`mr-4 p-3 rounded-full ${
//                       darkMode
//                         ? "bg-gray-700 text-blue-400"
//                         : "bg-blue-100 text-blue-600"
//                     }`}
//                   >
//                     📍
//                   </div>
//                   <div>
//                     <h4
//                       className={`font-bold mb-1 ${
//                         darkMode ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       Our Location
//                     </h4>
//                     <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
//                       123 Business Avenue, Tech District
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className={`p-6 rounded-lg ${
//                   darkMode ? "bg-gray-800" : "bg-white shadow-md"
//                 }`}
//               >
//                 <div className="flex items-start">
//                   <div
//                     className={`mr-4 p-3 rounded-full ${
//                       darkMode
//                         ? "bg-gray-700 text-blue-400"
//                         : "bg-blue-100 text-blue-600"
//                     }`}
//                   >
//                     📱
//                   </div>
//                   <div>
//                     <h4
//                       className={`font-bold mb-1 ${
//                         darkMode ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       Phone Number
//                     </h4>
//                     <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
//                       +91 8630605029
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className={`p-6 rounded-lg ${
//                   darkMode ? "bg-gray-800" : "bg-white shadow-md"
//                 }`}
//               >
//                 <div className="flex items-start">
//                   <div
//                     className={`mr-4 p-3 rounded-full ${
//                       darkMode
//                         ? "bg-gray-700 text-blue-400"
//                         : "bg-blue-100 text-blue-600"
//                     }`}
//                   >
//                     ✉️
//                   </div>
//                   <div>
//                     <h4
//                       className={`font-bold mb-1 ${
//                         darkMode ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       Email Address
//                     </h4>
//                     <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
//                       info@snapforgeitsolutions.com
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className={`p-6 rounded-lg ${
//                   darkMode ? "bg-gray-800" : "bg-white shadow-md"
//                 }`}
//               >
//                 <div className="flex items-start">
//                   <div
//                     className={`mr-4 p-3 rounded-full ${
//                       darkMode
//                         ? "bg-gray-700 text-blue-400"
//                         : "bg-blue-100 text-blue-600"
//                     }`}
//                   >
//                     🌐
//                   </div>
//                   <div>
//                     <h4
//                       className={`font-bold mb-1 ${
//                         darkMode ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       Website
//                     </h4>
//                     <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
//                       www.snapforgeitsolutions.com
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h4
//                 className={`font-bold mb-4 ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Connect With Us
//               </h4>
//               <div className="flex space-x-4">
//                 {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
//                   (platform, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       className={`p-3 rounded-full ${
//                         darkMode
//                           ? "bg-gray-800 hover:bg-gray-700 text-white"
//                           : "bg-gray-100 hover:bg-gray-200 text-gray-800"
//                       } transition-colors`}
//                     >
//                       {platform === "Facebook" && "📘"}
//                       {platform === "Twitter" && "📓"}
//                       {platform === "Instagram" && "📱"}
//                       {platform === "LinkedIn" && "📔"}
//                     </a>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Footer Component
// function Footer({ darkMode }) {
//   return (
//     <footer
//       className={`py-12 ${
//         darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-700"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           <div>
//             <div className="flex items-center space-x-2 mb-6">
//               <div
//                 className={`text-xl font-bold ${
//                   darkMode ? "text-blue-400" : "text-blue-600"
//                 }`}
//               >
//                 SNAP
//               </div>
//               <div
//                 className={`text-xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 FORGE
//               </div>
//             </div>
//             <p className="mb-6">
//               Full-service digital marketing agency offering affordable
//               solutions for startups and small businesses.
//             </p>
//             <div className="flex space-x-4">
//               {["📘", "📓", "📱", "📔"].map((icon, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className={`p-2 rounded-full ${
//                     darkMode
//                       ? "bg-gray-800 hover:bg-gray-700"
//                       : "bg-gray-100 hover:bg-gray-300"
//                   } transition-colors`}
//                 >
//                   {icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4
//               className={`text-lg font-bold mb-6 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map(
//                 (link, index) => (
//                   <li key={index}>
//                     <a
//                       href="#"
//                       className={`hover:${
//                         darkMode ? "text-blue-400" : "text-blue-600"
//                       } transition-colors`}
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           <div>
//             <h4
//               className={`text-lg font-bold mb-6 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Our Services
//             </h4>
//             <ul className="space-y-3">
//               {[
//                 "Website Development",
//                 "Search Engine Optimization",
//                 "Graphic Designing",
//                 "Social Media Marketing",
//                 "Legal Compliance",
//               ].map((service, index) => (
//                 <li key={index}>
//                   <a
//                     href="#"
//                     className={`hover:${
//                       darkMode ? "text-blue-400" : "text-blue-600"
//                     } transition-colors`}
//                   >
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4
//               className={`text-lg font-bold mb-6 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Contact Info
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start space-x-3">
//                 <span>📍</span>
//                 <span>123 Business Avenue, Tech District</span>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <span>📱</span>
//                 <span>+91 8630605029</span>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <span>✉️</span>
//                 <span>info@snapforgeitsolutions.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-gray-700">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p>&copy; 2025 SnapForge IT Solutions. All rights reserved.</p>
//             <div className="mt-4 md:mt-0">
//               <ul className="flex space-x-6">
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Terms of Service
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Sitemap
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
