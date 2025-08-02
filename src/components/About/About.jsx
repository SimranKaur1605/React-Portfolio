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
    <section className="min-h-screen bg-[#090008] text-white py-20 px-6 flex flex-col items-center font-sans">
      {/* Section Header */}
      <p className="text-pink-500 text-sm uppercase tracking-widest mb-2">Get To Know More</p>
      <h2 className="text-5xl font-extrabold mb-12 text-white drop-shadow-lg tracking-wide">About Me</h2>

      {/* Education + Training Cards */}
      <div className="flex flex-col md:flex-row gap-10 mb-16 max-w-6xl w-full justify-center">
        {/* Training */}
        <div className="flex-1 bg-[#1a1a1a] border border-pink-500 rounded-2xl p-8 shadow-lg text-center hover:scale-105 hover:shadow-pink-500/40 transition-all duration-300">
          <div className="text-4xl mb-4">🎖️</div>
          <h3 className="text-3xl font-bold text-pink-400 mb-2">Training</h3>
          <p className="text-lg">I have completed my training in Web Designing</p>
          <p className="text-sm text-gray-400">(2022)</p>
          <p className="text-xl text-white font-semibold mt-2">Frontend Development</p>
        </div>

        {/* Education */}
        <div className="flex-1 bg-[#1a1a1a] border border-cyan-400 rounded-2xl p-8 shadow-lg text-center hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-3xl font-bold text-cyan-300 mb-4">Education</h3>
          <div className="mb-6">
            <p className="text-xl font-bold text-white">SENIOR SECONDARY EDUCATION</p>
            <p className="italic text-sm text-gray-400">Geeta Sr. Sec. School (2020)</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">BACHELOR OF TECHNOLOGY</p>
            <p className="italic text-sm text-gray-400">
              Guru Jambheshwar University of Science and Technology, Hisar (2020–2024)
            </p>
          </div>
        </div>
      </div>

      {/* Experience Card */}
      <div className="w-full max-w-2xl bg-[#1a1a1a] border border-green-400 rounded-2xl p-8 shadow-lg text-center hover:scale-105 hover:shadow-green-400/40 transition-all duration-300 mb-8">
        <img
          src={digi24}
          alt="Digi24 India Logo"
          className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-2 border-gray-300 shadow-md"
        />
        <h3 className="text-2xl font-bold text-green-300 mb-1">WordPress Developer</h3>
        <p className="text-sm text-gray-400">Digi24 India · Full-time</p>
        <p className="text-sm text-gray-400">Feb 2025 – Jun 2025 · 5 mos</p>
        <p className="text-sm text-gray-400 mb-4">Noida, Uttar Pradesh, India · On-site</p>

        <p className="font-medium text-white mb-3">🔧 Web Development Projects I’ve Worked On:</p>
        <ul className="text-sm justify-center items-center text-left text-gray-300 space-y-1 pl-4 list-none">
          <li>🌐 Digi24India.in – Digital Marketing company</li>
          <li>🎨 Disenographic.com – Digital marketing and branding agency</li>
          <li>🏠 ConceptzHome.in – Real estate and interior design solutions</li>
          <li>🛍️ CreyClothing.com – E-commerce clothing store</li>
          <li>🌿 Ayurgrowth.in – Ayurvedic wellness and health products</li>
        </ul>
      </div>
    </section>
  );
}
