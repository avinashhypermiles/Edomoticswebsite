import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Menu, X, Home, Tv, Shield, Lightbulb,
  Star, ArrowRight, Users, Award, Clock, Zap, Wifi, PlayCircle,
  CheckCircle, ChevronRight, Smartphone, Settings, Camera,
  Thermometer, Lock, Music, Globe, MousePointer, Power,
  WifiIcon, Bluetooth, Radio
} from 'lucide-react';

// Your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_qzrto3a';
const EMAILJS_TEMPLATE_ID = 'template_73ulw4v';
const EMAILJS_PUBLIC_KEY = 'djoXrPTL3rU1bxWiF';

// Load EmailJS script dynamically
const loadEmailJS = () => {
  return new Promise((resolve, reject) => {
    if (window.emailjs) {
      resolve(window.emailjs);
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
      resolve(window.emailjs);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CHINMUDRA INNOVATIONS</h3>
            <p className="text-gray-400">Transforming homes with smart technology solutions across India.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Home Automation</li>
              <li>Smart Security</li>
              <li>Entertainment Systems</li>
              <li>Climate Control</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+91 98765 43210</li>
              <li>info@chinmudra.com</li>
              <li>Hyderabad, India</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Chinmudra Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Animated Background Component for Home Automation
const HomeAutomationBackground = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const lightPositions = [
    { x: '15%', y: '20%', delay: '0s' },
    { x: '85%', y: '25%', delay: '0.5s' },
    { x: '25%', y: '60%', delay: '1s' },
    { x: '75%', y: '65%', delay: '1.5s' },
    { x: '45%', y: '30%', delay: '2s' },
    { x: '60%', y: '80%', delay: '2.5s' },
  ];

  const devicePositions = [
    { x: '20%', y: '40%', type: 'thermostat', delay: '0.2s' },
    { x: '80%', y: '50%', type: 'camera', delay: '0.8s' },
    { x: '35%', y: '75%', type: 'speaker', delay: '1.4s' },
    { x: '65%', y: '35%', type: 'lock', delay: '2.0s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {/* Animated Light Bulbs */}
      {lightPositions.map((light, index) => (
        <div
          key={`light-${index}`}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: light.x, 
            top: light.y,
            animationDelay: light.delay,
          }}
        >
          <div className="relative">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-1000 ${
                animationPhase % 2 === 0 ? 'bg-yellow-400/80 shadow-lg shadow-yellow-400/50' : 'bg-gray-400/40'
              }`}
              style={{
                animation: `lightPulse 3s ease-in-out infinite`,
                animationDelay: light.delay,
              }}
            >
              <Lightbulb className={`w-5 h-5 ${animationPhase % 2 === 0 ? 'text-yellow-900' : 'text-gray-600'}`} />
            </div>
            
            {animationPhase % 2 === 0 && (
              <div 
                className="absolute top-full left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-yellow-300/40 via-yellow-200/20 to-transparent rounded-b-full"
                style={{
                  animation: `lightBeam 3s ease-in-out infinite`,
                  animationDelay: light.delay,
                }}
              ></div>
            )}

            <div className="absolute -top-6 -right-6">
              <div 
                className="w-6 h-6 text-green-400"
                style={{
                  animation: `wifiPulse 2s ease-in-out infinite`,
                  animationDelay: light.delay,
                }}
              >
                <Wifi className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Smart Home Devices */}
      {devicePositions.map((device, index) => (
        <div
          key={`device-${index}`}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: device.x, 
            top: device.y,
            animation: `deviceFloat 4s ease-in-out infinite`,
            animationDelay: device.delay,
          }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500/80 to-emerald-500/80 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-green-300/30">
              {device.type === 'thermostat' && <Thermometer className="w-5 h-5 text-white" />}
              {device.type === 'camera' && <Camera className="w-5 h-5 text-white" />}
              {device.type === 'speaker' && <Music className="w-5 h-5 text-white" />}
              {device.type === 'lock' && <Lock className="w-5 h-5 text-white" />}
            </div>
            
            <div 
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                animationPhase >= 1 ? 'bg-green-400' : 'bg-gray-400'
              } shadow-sm`}
              style={{
                animation: `statusBlink 2s ease-in-out infinite`,
                animationDelay: device.delay,
              }}
            ></div>

            {index < devicePositions.length - 1 && (
              <div 
                className="absolute top-1/2 left-full w-20 h-px bg-gradient-to-r from-green-400/60 via-emerald-400/40 to-transparent"
                style={{
                  animation: `connectionPulse 3s ease-in-out infinite`,
                  animationDelay: `${parseFloat(device.delay) + 0.5}s`,
                }}
              ></div>
            )}
          </div>
        </div>
      ))}

      {/* Central Hub */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ animation: `hubPulse 4s ease-in-out infinite` }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/80 to-cyan-500/80 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-lg border border-blue-300/30">
          <Home className="w-8 h-8 text-white" />
        </div>
        
        <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/40" style={{ animation: `ripple 3s ease-out infinite` }}></div>
        <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30" style={{ animation: `ripple 3s ease-out infinite 1s` }}></div>
        <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/20" style={{ animation: `ripple 3s ease-out infinite 2s` }}></div>
      </div>

      {/* Floating IoT Particles */}
      {[...Array(8)].map((_, index) => (
        <div
          key={`particle-${index}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60"
          style={{
            left: `${15 + (index * 10)}%`,
            top: `${20 + (index * 8)}%`,
            animation: `particleFloat 6s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s`,
          }}
        ></div>
      ))}

      <style jsx>{`
        @keyframes lightPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes lightBeam {
          0%, 100% { opacity: 0; transform: translateX(-50%) scaleY(0); }
          50% { opacity: 0.8; transform: translateX(-50%) scaleY(1); }
        }
        
        @keyframes wifiPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes deviceFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        
        @keyframes statusBlink {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes connectionPulse {
          0%, 100% { opacity: 0.2; transform: scaleX(0.5); }
          50% { opacity: 0.8; transform: scaleX(1); }
        }
        
        @keyframes hubPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }
        
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
        
        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3; 
          }
          33% { 
            transform: translateY(-20px) rotate(120deg); 
            opacity: 0.8; 
          }
          66% { 
            transform: translateY(-10px) rotate(240deg); 
            opacity: 0.6; 
          }
        }
      `}</style>
    </div>
  );
};

const ChinmudraWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Handle form input changes
  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission with EmailJS - Fixed with hardcoded recipient email
  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    // Basic validation
    if (!contactForm.name || !contactForm.phone) {
      setSubmitError('Please fill in all required fields (Name and Phone Number)');
      setIsSubmitting(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(contactForm.phone.replace(/\s/g, ''))) {
      setSubmitError('Please enter a valid phone number');
      setIsSubmitting(false);
      return;
    }

    try {
      // Load EmailJS library
      const emailjs = await loadEmailJS();
      

const templateParams = {
  name: contactForm.name,
  phone: contactForm.phone,
  email: contactForm.email || 'Not provided',
  city: contactForm.city || 'Not provided',
  service: contactForm.service || 'Not specified',
  details: contactForm.details || 'No additional details provided',
};


      console.log('Sending email with params:', templateParams);

      // Send email using your EmailJS credentials
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitSuccess(true);
      
      // Clear form
      setContactForm({
        name: '',
        phone: '',
        email: '',
        city: '',
        service: '',
        details: '',
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError(`Failed to send message: ${error.text || error.message || 'Please try again or contact us directly.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const siteConfig = {
    logo: "CHINMUDRA",
    tagline: "INNOVATIONS",
    hero: {
      title: "Transform Your Space with Smart Technology",
      subtitle: "India's Leading Home Automation Company - Making Intelligent Living Accessible and Affordable",
      features: ["Voice Control", "Remote Access", "Energy Savings", "24/7 Security"]
    },
    services: [
      {
        icon: <Home className="w-8 h-8" />,
        title: "Complete Home Automation",
        description: "End-to-end smart home solutions with integrated control systems for modern living",
        features: ["Voice Assistant Integration", "Mobile App Control", "Scene Automation", "Energy Management"],
        color: "from-blue-500 to-cyan-400"
      },
      {
        icon: <Tv className="w-8 h-8" />,
        title: "Entertainment Systems",
        description: "Premium audio-video solutions and home theater installations for immersive experiences",
        features: ["4K/8K Systems", "Surround Sound", "Smart Streaming", "Custom Installation"],
        color: "from-purple-500 to-pink-400"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Smart Security Solutions",
        description: "Advanced security systems with AI-powered monitoring and intelligent alerts",
        features: ["IP Cameras", "Smart Locks", "Motion Detection", "Remote Monitoring"],
        color: "from-green-500 to-teal-400"
      },
      {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Intelligent Lighting",
        description: "Smart lighting systems with automated controls and energy-efficient solutions",
        features: ["RGB Control", "Scene Programming", "Motion Sensors", "Voice Commands"],
        color: "from-yellow-500 to-orange-400"
      },
      {
        icon: <Thermometer className="w-8 h-8" />,
        title: "Climate Control",
        description: "Smart HVAC systems for optimal comfort and energy efficiency",
        features: ["Smart Thermostats", "Zone Control", "Energy Optimization", "Remote Access"],
        color: "from-indigo-500 to-purple-400"
      },
      {
        icon: <Music className="w-8 h-8" />,
        title: "Multi-Room Audio",
        description: "Whole-home audio systems with synchronized music streaming",
        features: ["Wireless Speakers", "Multi-Zone Control", "Streaming Integration", "High-Fidelity Sound"],
        color: "from-pink-500 to-red-400"
      }
    ],
    smartFeatures: [
      { icon: <Smartphone />, title: "Mobile Control", desc: "Control your entire home from anywhere" },
      { icon: <Wifi />, title: "IoT Integration", desc: "Seamless connectivity across all devices" },
      { icon: <Settings />, title: "Professional Setup", desc: "Expert installation and configuration" },
      { icon: <Zap />, title: "Energy Efficient", desc: "Smart automation reduces energy costs" },
      { icon: <Camera />, title: "Live Monitoring", desc: "Real-time surveillance and alerts" },
      { icon: <Lock />, title: "Secure Access", desc: "Advanced encryption and security protocols" }
    ],
    testimonials: [
      {
        name: "Rajesh Kumar",
        text: "Chinmudra's home automation solution transformed our living experience. The installation was seamless and the ongoing support is excellent. Highly recommend their innovative approach!",
        rating: 5,
        location: "Hyderabad"
      },
      {
        name: "Priya Sharma",
        text: "The smart home theater setup by Chinmudra exceeded our expectations. The integration with our home automation system is flawless. Outstanding service!",
        rating: 5,
        location: "Bangalore"
      },
      {
        name: "Amit Reddy",
        text: "Professional team with cutting-edge solutions. They understood our requirements perfectly and delivered a comprehensive automation system within budget. Truly innovative!",
        rating: 5,
        location: "Chennai"
      }
    ],
    stats: [
      { number: "500+", label: "Homes Automated" },
      { number: "25+", label: "Cities Served" },
      { number: "5+", label: "Years Innovation" },
      { number: "24/7", label: "Support Available" }
    ],
    locations: [
      {
        city: "Hyderabad",
        address: "123, Tech City, Madhapur, Hyderabad, Telangana - 500081"
      },
    ],
    contact: {
      phone: "+91 98765 43210",
      email: "info@chinmudra.com",
    }
  };

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header with Logo */}
      <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-lg shadow-xl z-[9999] transition-all duration-300 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center shadow-lg p-2">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23a3e635;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2365a30d;stop-opacity:1' /%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='200' cy='200' r='180' fill='%23000'/%3E%3Cg transform='translate(200,200)'%3E%3Ccircle cx='0' cy='-120' r='12' fill='url(%23grad)'/%3E%3Ccircle cx='85' cy='-85' r='12' fill='url(%23grad)'/%3E%3Ccircle cx='120' cy='0' r='12' fill='url(%23grad)'/%3E%3Ccircle cx='85' cy='85' r='12' fill='url(%23grad)'/%3E%3Ccircle cx='0' cy='120' r='12' fill='url(%23grad)'/%3E%3Ccircle cx='-85' cy='85' r='12' fill='url(%23grad)'/%3E%3Ccircle cx='-120' cy='0' r='12' fill='url(%23grad)'/%3E%3Ccircle cx='-85' cy='-85' r='12' fill='url(%23grad)'/%3E%3Cpath d='M-60,-60 Q-30,-80 0,-60 Q30,-80 60,-60 Q80,-30 60,0 Q80,30 60,60 Q30,80 0,60 Q-30,80 -60,60 Q-80,30 -60,0 Q-80,-30 -60,-60 Z' fill='url(%23grad)' opacity='0.8'/%3E%3Ctext x='0' y='10' text-anchor='middle' fill='white' font-family='Arial' font-size='60' font-weight='bold'%3EC%3C/text%3E%3C/g%3E%3C/svg%3E" 
                  alt="Chinmudra Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800 tracking-wide">
                  CHINMUDRA
                </span>
                <p className="text-sm text-green-600 font-medium -mt-1">INNOVATIONS</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group ${
                    activeSection === item.id ? 'text-green-600' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-500 to-green-700 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100">
            <div className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Add padding-top to prevent content from going under navbar */}
      <div className="pt-20">
        {/* Revolutionary Hero Section with Animated Home Automation Background */}
        <section id="home" className="relative overflow-hidden scroll-mt-20">
          {/* Animated Background with Home Automation Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-black">
            {/* Home Automation Animated Background */}
            <HomeAutomationBackground />
            
            {/* Original overlay gradients for depth */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
          
          <div className="relative min-h-screen flex items-center justify-center text-white px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-8 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
                <Zap className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm font-medium">India's Most Trusted Home Automation Company</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
                  Smart Homes,
                </span>
                <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                  Smarter Living
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the future of intelligent living with <span className="font-bold text-green-400">Chinmudra Innovations</span> — 
                Your premier partner in comprehensive home automation and smart technology solutions across India.
              </p>
              
              {/* Feature Tags */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {siteConfig.hero.features.map((feature, index) => (
                  <div key={index} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
                    <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => scrollToSection('services')}
                  className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
                >
                  <Phone size={16} />
                  <span>Free Consultation</span>
                </button>
                
                <button className="group flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300">
                  <PlayCircle size={40} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>View Portfolio</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" data-animate className="py-20 bg-white scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                  About Chinmudra Innovations
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Leading India's smart home revolution with innovative, reliable, and scalable automation solutions that transform the way you live.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">Customer-Centric Approach</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Every home tells a unique story. Our certified experts conduct comprehensive consultations to understand 
                        your lifestyle, preferences, and requirements, designing bespoke automation ecosystems that perfectly 
                        align with your daily routines and future aspirations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">Innovation Excellence</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We collaborate with global technology leaders and invest heavily in R&D to deliver next-generation 
                        smart home solutions. From voice-controlled environments to predictive automation and energy optimization, 
                        we bring tomorrow's technology to your home today.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 p-8 rounded-3xl shadow-2xl border border-green-100">
                  <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Vision & Mission</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-green-700">Vision:</strong> To make intelligent home automation accessible to every Indian family, 
                      creating connected ecosystems where technology seamlessly enhances comfort, security, and sustainability.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-green-700">Mission:</strong> Delivering world-class, reliable, and cost-effective home automation solutions 
                      through innovative technology, expert craftsmanship, and comprehensive support to revolutionize modern Indian living.
                    </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl border border-green-100">
                      <div className="text-2xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-gray-600">Smart Homes</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-green-100">
                      <div className="text-2xl font-bold text-emerald-600">5+</div>
                      <div className="text-sm text-gray-600">Years Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company Values */}
              <div className="bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900 text-white rounded-3xl p-12">
                <h3 className="text-3xl font-bold mb-8 text-center">Why Chinmudra Innovations?</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Proven Reliability</h4>
                    <p className="text-gray-300">Enterprise-grade systems with lifetime support and regular firmware updates.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Expert Installation</h4>
                    <p className="text-gray-300">Certified engineers ensure flawless integration without disrupting your lifestyle.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Lifetime Support</h4>
                    <p className="text-gray-300">24/7 assistance with proactive maintenance and system optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Features Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                Why Choose Chinmudra Home Automation?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience unparalleled convenience, security, and efficiency with India's most comprehensive smart home solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {siteConfig.smartFeatures.map((feature, index) => (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center text-white">
              {siteConfig.stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-green-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section id="services" data-animate className="py-20 bg-white scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                  Our Premium Home Automation Solutions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive smart home services designed to elevate your living experience with cutting-edge technology
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {siteConfig.services.map((service, index) => (
                  <div key={index} className={`group relative overflow-hidden bg-gradient-to-br ${service.color} p-8 rounded-3xl text-white transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/90 mb-6">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => scrollToSection('contact')}
                        className="mt-6 inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300"
                      >
                        <span>Get Quote</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials with Carousel */}
        <section id="testimonials" data-animate className="py-20 bg-gradient-to-br from-gray-50 to-green-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                  Customer Success Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Hear from families across India who transformed their homes with Chinmudra's innovative automation solutions
                </p>
              </div>
              
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                      "{siteConfig.testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {siteConfig.testimonials[currentTestimonial].name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">{siteConfig.testimonials[currentTestimonial].name}</p>
                        <p className="text-gray-500">{siteConfig.testimonials[currentTestimonial].location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                  {siteConfig.testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index ? 'bg-green-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section with Working EmailJS Form */}
        <section id="contact" data-animate className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white relative overflow-hidden scroll-mt-20">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6">Ready to Automate Your Home?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Transform your home today with Chinmudra's premium automation solutions. Get a free consultation and personalized quote from India's leading experts.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-8">Connect With Our Automation Experts</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Call Us Today</p>
                        <p className="text-green-200 text-lg">{siteConfig.contact.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Email Us</p>
                        <p className="text-blue-200 text-lg">{siteConfig.contact.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h4 className="text-xl font-bold mb-6 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Our Service Locations
                    </h4>
                    <div className="space-y-4">
                      {siteConfig.locations.map((location, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                          <h5 className="font-bold text-lg text-green-200 mb-2">{location.city}</h5>
                          <p className="text-gray-300 text-sm leading-relaxed">{location.address}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Working EmailJS Contact Form */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Home Automation Consultation</h3>
                  
                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-400/50 rounded-xl">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <p className="text-green-200 font-medium">
                          Thank you! We received your inquiry and will contact you within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-400/50 rounded-xl">
                      <p className="text-red-200">{submitError}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleContactFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactFormChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleContactFormChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactFormChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={contactForm.city}
                        onChange={handleContactFormChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your city"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Services Interested In</label>
                      <select 
                        name="service"
                        value={contactForm.service}
                        onChange={handleContactFormChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                      >
                        <option value="" className="text-gray-800">Select a service</option>
                        <option value="complete-automation" className="text-gray-800">Complete Home Automation</option>
                        <option value="entertainment" className="text-gray-800">Entertainment Systems</option>
                        <option value="security" className="text-gray-800">Smart Security Solutions</option>
                        <option value="lighting" className="text-gray-800">Intelligent Lighting</option>
                        <option value="climate" className="text-gray-800">Climate Control</option>
                        <option value="audio" className="text-gray-800">Multi-Room Audio</option>
                        <option value="custom" className="text-gray-800">Custom Solution</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details</label>
                      <textarea
                        name="details"
                        value={contactForm.details}
                        onChange={handleContactFormChange}
                        rows={4}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="Tell us about your home automation requirements, property type, budget range, and timeline..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:shadow-2xl transform hover:scale-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending Email...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Free Consultation</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                  
                  <p className="text-center text-sm text-gray-300 mt-4">
                    Free site visit and consultation • 100% privacy guaranteed • Quick response within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ChinmudraWebsite;
