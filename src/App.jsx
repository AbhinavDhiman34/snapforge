


// App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/Contactsection";
import Footer from "./components/Footer";
import SplashCursor from './components/SplashCursor';
import './App.css'


export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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