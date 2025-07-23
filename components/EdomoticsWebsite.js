import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Home, Tv, Shield, Lightbulb, Star, CheckCircle, ArrowRight, Users, Award, Clock } from 'lucide-react';

const EdomoticsWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Dynamic content that can be easily changed
  const siteConfig = {
    logo: "HYPERMILES",
    tagline: "Smart Living Solutions",
    hero: {
      title: "Transform Your Space with Smart Technology",
      subtitle: "Market leader in Integrated Solutions for Automation and Audio-Video (AV) systems",
      backgroundImage: "/api/placeholder/1920/1080"
    },
    services: [
      {
        icon: <Home className="w-8 h-8" />,
        title: "Home Automation",
        description: "Complete smart home solutions with world-class automation systems"
      },
      {
        icon: <Tv className="w-8 h-8" />,
        title: "Home Theatre",
        description: "Premium audio-video systems for immersive entertainment experiences"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Security Systems",
        description: "Advanced security solutions for residential and commercial properties"
      },
      {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Smart Lighting",
        description: "Intelligent lighting systems for comfort and energy efficiency"
      }
    ],
    testimonials: [
      {
        name: "Satisfied Customer",
        text: "With absolute pleasure, I say that the services provided by EDOMOTICS has been professional, punctual and excellent. I recommend EDOMOTICS to anyone who is looking to automate their house.",
        rating: 5
      },
      {
        name: "Home Theatre Client",
        text: "I am very pleased with the home theatre setup that EDOMOTICS has provided. It was really worth the investment.",
        rating: 5
      },
      {
        name: "Happy Family",
        text: "Folks at EDOMOTICS are very professional and attentive. Before starting the work, they have patiently gone through all the options and solutions in our budget.",
        rating: 5
      }
    ],
    locations: [
      {
        city: "Hyderabad",
        address: "Plot No.126, 3rd Floor, Above SBI, Road No.11, Jubilee Hills, Hyderabad – 500033"
      },
      {
        city: "Chennai",
        address: "C/o Audire Technologies, No.41, Nungambakkam High Road, Adj. to Taj Coromandel, Chennai – 600034"
      },
      {
        city: "Bangalore",
        address: "2nd Floor, Sri Kala complex, 2073, 24th Main Rd, Opp. Lotus Hospital, 1st Sector, HSR Layout, Bangalore 560102"
      }
    ],
    contact: {
      phone: "+91 9704910877",
      email: "avinash.hypermiles@gmail.com",
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

  // EmailJS send function
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
      form.current,
      'YOUR_USER_ID'          // Replace with your EmailJS public key
    )
    .then(() => {
      alert('Message sent! We will contact you soon.');
    }, () => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {siteConfig.logo}
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                    activeSection === item.id ? 'text-blue-600 border-b-2 border-blue-600' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              {siteConfig.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {siteConfig.hero.subtitle}
            </p>
            <p className="text-lg text-gray-500 mb-10">
              {siteConfig.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About HYPERMILES</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Started in 2025, we're a technology-based lifestyle company passionate about bringing world-class automation and AV systems to your space.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Market Leader</h3>
                    <p className="text-gray-600">Integrated solutions for automation and audio-video systems with proven track record since 20.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Customer-Centric</h3>
                    <p className="text-gray-600">We go the extra mile to ensure customer satisfaction with easy installation and seamless support.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Holistic Approach</h3>
                    <p className="text-gray-600">Not just point solutions - we bring fundamental changes to comfort, convenience, security, and safety.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  A technology-based lifestyle company that believes in continuous innovation and invests in strong technical R&D for residential and commercial properties.
                </p>
                <p className="text-gray-600">
                  We have strong alliance partners with world-class products and can provide the right solution for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive smart solutions for modern living and working spaces
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {siteConfig.services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real feedback from satisfied customers who trusted us with their smart home projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {siteConfig.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Verified Customer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your space? Contact us for a consultation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-300">{siteConfig.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
                  <div className="space-y-6">
                    {siteConfig.locations.map((location, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold">{location.city}</p>
                          <p className="text-gray-300 text-sm leading-relaxed">{location.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    onClick={() => alert('Message sent! We will contact you soon.')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {siteConfig.logo}
              </span>
            </div>
            <p className="text-gray-400">
              © 2025 Avinash. All rights reserved. | Smart Living Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EdomoticsWebsite;