import React from 'react';
import profileImage from "../../assets/Profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import ContactImage from '../../assets/Contact.png';

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";



export default function Home() {
  return (
    <>
      
      <div className="min-h-screen flex items-center justify-center bg-[#090008] text-white px-2">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:mt-0 md:ml-10">
            <div className="w-80 h-80 rounded-full border-4 border-white overflow-hidden">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl pt-4 md:text-5xl font-extrabold">WEB DEVELOPER</h1>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white">Frontend Developer</h2>
            <p className="text-sm md:text-base text-white max-w-md">
              I’m a self-motivated and enthusiastic Web Developer with a solid foundation in frontend and backend technologies.
            </p>

           
<div className="flex flex-col items-center justify-center mt-6">
  {/* Download CV Button */}
  <a
    href="https://drive.google.com/your-resume-link" // <-- Replace with actual CV link if needed
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-white text-[#090008] px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
  >
    Download CV
  </a>

  {/* Social Icons: LinkedIn and GitHub side by side */}
  <div className="flex gap-4 mt-4">
    {/* LinkedIn Icon */}
    <a
      href="https://www.linkedin.com/in/simran-kaur-68a963292/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full hover:bg-gray-300 transition text-[#090008]"
      title="LinkedIn"
    >
      <FaLinkedin className="text-xl" />
    </a>

    {/* GitHub Icon */}
    <a
      href="https://github.com/SimranKaur1605"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full hover:bg-gray-300 transition text-[#090008]"
      title="GitHub"
    >
      <FaGithub className="text-xl" />
    </a>
  </div>
</div>



          </div>
        </div>
      </div>

      
      <section className="pt-0 mt-0 min-h-screen bg-[#090008] text-white flex flex-col md:flex-row p-10 md:p-20">
        <div className="md:w-1/4 mb-10 md:mb-0">
          <h2 className="text-4xl font-semibold">Skills</h2>
        </div>

        <div className="md:w-3/4 flex">
          <div className="border-l-2 border-white mr-8"></div>

          <div className="space-y-8">
            <Skill title="HTML + CSS" description="Proficient in crafting clean, semantic HTML and responsive CSS for building modern, accessible, and visually appealing web interfaces. Experienced in flexbox, grid layout, and CSS transitions." />
            <Skill title="JAVASCRIPT" description="Skilled in writing clean, efficient, and modular JavaScript code. Capable of DOM manipulation, handling events, and creating dynamic user experiences using React JS." />

            <Skill title="Tailwind CSS" description="Proficient in building responsive, mobile-first interfaces using utility-first classes, customizing themes, and optimizing layouts for performance" />
  <Skill title="Bootstrap" description="Familiar with using Bootstrap 5 to build responsive layouts, navigation bars, modals, and other UI components. Comfortable working with Bootstrap’s grid system and utility classes" />
            <Skill title="React Js" description="Developed dynamic web applications using React.js, leveraging hooks, reusable components, and routing for optimized user experience." />
            <Skill title="Node Js" description="Exploring backend development with Node.js — building simple, fast, and functional server-side applications." />
            <Skill title="Wordpress" description="Designed and deployed websites using WordPress, including e-commerce and business portfolios, with custom themes, plugins, and responsive design using Elementor and custom CSS." />
            <Skill title="Manual Testing" description="Ensuring quality through hands-on Manual Testing — making sure every feature works as it should." />
          </div>
        </div>
      </section>

      
      <section className="min-h-screen flex items-center justify-around bg-white text-[#3f0d52] px-4 py-8">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-around ">
          <div className="w-80 h-72 rounded-lg overflow-hidden">
            <img src={ContactImage} alt="Contact" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-semibold mb-2">Contact Me</h2>
            <div className="space-y-4">
              <ContactItem icon={<FaPhoneAlt className="text-xl" />} text="+91 8053725999" />
              <ContactItem icon={<FaEnvelope className="text-xl " />} text="kaur.simransawna@gmail.com" link="mailto:kaur.simransawna@gmail.com" />
              <ContactItem icon={<FaLinkedin className="text-xl" />} text="LinkedIn" link="https://www.linkedin.com/in/simran-kaur-68a963292/" />
              <ContactItem icon={<SiIndeed className="text-xl" />} text="Indeed" link="https://in.indeed.com/profile/simran" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


const Skill = ({ title, description }) => (
  <div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm mt-1 text-gray-200">{description}</p>
  </div>
);


const ContactItem = ({ icon, text, link }) => (
  <div className="flex items-center space-x-4">
    {icon}
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-base font-medium underline">
        {text}
      </a>
    ) : (
      <p className="text-base font-medium">{text}</p>
    )}
  </div>
);