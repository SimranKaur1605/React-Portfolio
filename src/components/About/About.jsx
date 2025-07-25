import React from 'react';
import digi24 from '../../assets/digi24.jpeg';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: "HTML", level: "I have experience in HTML5" },
    { name: "CSS", level: "I have experience in CSS3" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Node.js", level: "Basic" },
    { name: "Express.js", level: "Basic" },
    { name: "WordPress", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
  ];

  return (
    <>
     
      <section className="min-h-screen bg-[#090008] text-white py-16 px-4 flex flex-col items-center">
        <p className="text-gray-500 text-sm mb-2">Get To Know More</p>
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

       
        <div className="flex flex-col md:flex-row gap-10 mb-10 max-w-6xl w-full justify-center">
         
          <div className="flex-1 border-2 border-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="text-3xl mb-4">🎖️</div>
            <h3 className="text-3xl font-semibold mb-2">Training</h3>
            <p className="text-base text-2xl font-medium">I have completed my training in Web Designing</p>
            <p className="text-base font-medium">(2022)</p>
            <p className="text-base text-3xl font-medium mt-2">Frontend Development</p>
          </div>

          
          <div className="flex-1 border-2 border-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-3xl font-semibold mb-4">Education</h3>
            <div className="mb-4">
              <p className="text-2xl font-bold">SENIOR SECONDARY EDUCATION</p>
              <p className="italic text-sm text-gray-300">Geeta Sr. Sec. School (2020)</p>
            </div>
            <div>
              <p className="text-2xl font-bold">BACHELOR OF TECHNOLOGY</p>
              <p className="italic text-sm text-gray-300">
                Guru Jambheshwar University of Science and Technology, Hisar (2020–2024)
              </p>
            </div>
          </div>
        </div>

    
        <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition duration-300 mb-12">
          <img
            src={digi24}
            alt="Digi24 India Logo"
            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border border-gray-300"
          />
          <h3 className="text-2xl font-semibold mb-1">WordPress Developer</h3>
          <p className="text-sm text-gray-300">Digi24 India · Full-time</p>
          <p className="text-sm text-gray-300">Feb 2025 – Jun 2025 · 5 mos</p>
          <p className="text-sm text-gray-300 mb-3">Noida, Uttar Pradesh, India · On-site</p>

          <p className="font-medium mb-2">🔧 Web Development Projects I’ve Worked On:</p>
          <ul className="text-sm text-left space-y-1">
            <li>🌐 Digi24India.in – Digital Marketing company</li>
            <li>🎨 Disenographic.com – Digital marketing and branding agency</li>
            <li>🏠 ConceptzHome.in – Real estate and interior design solutions</li>
            <li>🛍️ CreyClothing.com – E-commerce clothing store</li>
            <li>🌿 Ayurgrowth.in – Ayurvedic wellness and health products</li>
          </ul>
        </div>
      </section>

      
    </>
  );
}
