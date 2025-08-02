import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#090008] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold">Simran Kaur</h2>
          <p className="text-sm text-gray-400 mt-2">
            Frontend Developer & Web Designer
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li>
              <a
                href="https://www.linkedin.com/in/simran-kaur-68a963292/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a href="mailto:kaur.simransawna@gmail.com" className="hover:text-white transition">
                kaur.simransawna@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-white" />
              <a href="tel:+918053725999" className="hover:text-white transition">
                +91 80537 25999
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-white" />
              <a
                href="https://www.linkedin.com/in/simran-kaur-68a963292/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
       <div className="flex md:justify-end items-start">
  <a
    href="https://wa.me/918053725999?text=Hi%20Simran%2C%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect!"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-300 transition"
  >
    Get in Touch
  </a>
</div>

      </div> 

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Simran Kaur. All rights reserved.
      </div>
    </footer>
  );
}
