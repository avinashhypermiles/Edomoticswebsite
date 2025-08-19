"use client";
import { useState } from "react";

export default function Footer() {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => setOpenModal(null);

  // Centralized modal content
  const modalContent = {
    terms: {
      title: "Terms of Use",
      color: "text-orange-600",
      text: "By using this website, you agree to comply with and be bound by our terms and conditions. The content is for general information only and subject to change without notice. We do not guarantee its accuracy or suitability for any purpose. Your use of the information is at your own risk. Unauthorized reproduction of content is prohibited.",
    },
    privacy: {
      title: "Privacy Policy",
      color: "text-green-600",
      text: "We collect personal information only for providing and improving our services. Your data will never be shared with third parties without your consent, except as required by law.",
    },
    disclaimer: {
      title: "Disclaimer",
      color: "text-red-600",
      text: "The information provided on this website is for general informational purposes only. While we strive for accuracy, we make no representations or warranties of any kind about completeness, reliability, or suitability.",
    },
    
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Top Section */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Chinmudra Logo" className="w-10 h-10" />
            <span className="text-green-400 font-semibold text-lg">INNOVATIONS</span>
          </div>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Leading India's smart home revolution with automation, IoT, and intelligent living solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-green-400 transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-gray-300 text-sm">601, 6th Floor, MJR Magnifique, Hyderabad, Telangana, 500081</p>
          <p className="mt-2 text-gray-300 text-sm">📞 +91 8142411666</p>
          <p className="text-gray-300 text-sm">✉️ info@chinmudra.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2025 Chinmudra Innovations. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {Object.keys(modalContent).map((key) => (
            <button
              key={key}
              onClick={() => setOpenModal(key)}
              className="px-3 py-1 bg-gray-800 rounded-lg hover:bg-green-500 hover:text-white transition text-sm"
            >
              {modalContent[key].title}
            </button>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Dynamic Content */}
            <h2
              className={`text-xl font-bold mb-2 ${modalContent[openModal].color}`}
            >
              {modalContent[openModal].title}
            </h2>
            <p className="text-sm text-gray-700">
              {modalContent[openModal].text}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
