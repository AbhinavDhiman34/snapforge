


// App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SplashCursor from './components/SplashCursor';
import './App.css'


export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Handle scroll events
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     setIsScrolled(scrollPosition > 10);

  //     // Update active section based on scroll position
  //     const sections = ["home", "services", "about", "contact"];
  //     for (const section of sections) {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         if (rect.top <= 100 && rect.bottom >= 100) {
  //           setActiveSection(section);
  //           break;
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);


  

  return (
    
    // <ThemeProvider>
    <>
      
      <Navbar 
       mobileMenuOpen={mobileMenuOpen}
       setMobileMenuOpen={setMobileMenuOpen}
       activeSection={activeSection}
       isScrolled={isScrolled} />
      <main>
        <SplashCursor />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
    // </ThemeProvider>
  );
}