import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative z-20" id="contact">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            About St.Xavier's
          </h3>
          <p className="text-gray-400 leading-relaxed">
            St.Xavier's Higher Secondary School has been shaping young minds for over 146 years. 
            We provide a nurturing environment that focuses on academic excellence, holistic growth, 
            and value-based education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#headmaster" className="hover:text-cyan-400 transition">Headmaster</a></li>
            <li><a href="#clubs" className="hover:text-cyan-400 transition">Clubs</a></li>
            <li><a href="#administrators" className="hover:text-cyan-400 transition">Administrators</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Contact Us
          </h3>
          <p className="text-gray-400 mb-2">123 Xavier Road, City, State, ZIP</p>
          <p className="text-gray-400 mb-2">Email: info@stxaviers.edu</p>
          <p className="text-gray-400 mb-4">Phone: +91 12345 67890</p>

          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} St.Xavier's Higher Secondary School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;