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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

       
        <div>
          <h2 className="text-2xl font-semibold text-white">Simran Kaur</h2>
          <p className="text-sm mt-2 text-gray-400">Frontend Developer | Web Designer</p>
        </div>

       
        <div>
          <h3 className="font-semibold mb-2 text-white">Navigation</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li>
              <a
                href="https://www.linkedin.com/in/simran-kaur-68a963292/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-2 text-white">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope /> kaur.simransawna@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +91 8053725999
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/simran-kaur-68a963292/"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn 
              </a>
            </li>
          </ul>
        </div>

      
        <div className="flex items-start md:justify-end">
          <a
            href="https://wa.me/918053725999"
            target="_blank"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>



      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 Simran Kaur. All Rights Reserved.
      </div>
    </footer>
  );
}
