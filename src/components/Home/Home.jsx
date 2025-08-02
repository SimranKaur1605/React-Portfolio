import React from 'react';
import profileImage from "../../assets/Profile.jpg";
import ContactImage from '../../assets/Contact.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
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
  <a
    href="https://drive.google.com/file/d/1WLbhAouFaQ7zJDfBF05CumuKuLW-G5jU/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="  inline-flex items-center gap-2 bg-white text-[#090008]   px-6 py-2 rounded-full font-semibold 
      hover:bg-gray-300 transition duration-300 ease-in-out
      hover:shadow-lg hover:shadow-white/60 
      active:scale-95 active:shadow-[0_0_20px_5px_rgba(255,255,255,0.5)]"
  >
    Download CV
  </a>

  <div className="flex gap-4 mt-4">
    <a
      href="https://www.linkedin.com/in/simran-kaur-68a963292/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full hover:bg-gray-300 transition duration-300 ease-in-out 
        text-[#090008] hover:shadow-md hover:shadow-white/50 active:scale-90"
      title="LinkedIn"
    >
      <FaLinkedin className="text-xl" />
    </a>
    <a
      href="https://github.com/SimranKaur1605"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full hover:bg-gray-300 transition duration-300 ease-in-out 
        text-[#090008] hover:shadow-md hover:shadow-white/50 active:scale-90"
      title="GitHub"
    >
      <FaGithub className="text-xl" />
    </a>
  </div>
</div>

          </div>
        </div>
      </div>

      
      <section className="min-h-screen bg-[#090008] text-white flex flex-col md:flex-row p-10 md:p-20">
        <div className="md:w-1/4 mb-10 md:mb-0">
          <h2 className="text-4xl font-semibold">Skills</h2>
        </div>

        <div className="md:w-3/4 flex">
          <div className="border-l-2 border-white mr-8"></div>
          <div className="space-y-8">
            <Skill title="HTML + CSS" description="Clean, semantic markup and responsive CSS using Flexbox & Grid." />
            <Skill title="JavaScript" description="DOM manipulation, event handling, and dynamic UI with React.js." />
            <Skill title="Tailwind CSS" description="Efficient, utility-first styling with custom theming." />
            <Skill title="Bootstrap" description="UI components and layout systems for quick prototyping." />
            <Skill title="React.js" description="SPA development using hooks, component lifecycle, and JSX." />
            <Skill title="Node.js" description="Exploring backend development and server-side logic." />
            <Skill title="WordPress" description="Custom websites using Elementor, themes, and plugins." />
            <Skill title="Manual Testing" description="End-to-end testing for usability and quality assurance." />
          </div>
        </div>
      </section>

      
      <section className="bg-[#160b1c] text-white py-16 px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">Tools & Technologies I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {["VS Code", "Git", "GitHub", "Postman", "Canva", "Figma", "Chrome DevTools", "Elementor"].map((tool, i) => (
            <div key={i} className="bg-[#392335] shadow-md rounded-xl py-4 px-3 text-center font-medium hover:bg-[#090008] transition duration-300">
              {tool}
            </div>
          ))}
        </div>
      </section>

     
      <section className="bg-[#090008] text-white py-16 px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Currently Learning</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          <LearningCard title="MongoDB" desc="Understanding NoSQL databases and integrating with Node.js apps." />
          <LearningCard title="Express.js" desc="Creating robust backend APIs and handling middleware." />
          <LearningCard title="API Integration" desc="Working with REST APIs to enhance frontend experiences." />
          <LearningCard title="Deployment" desc="Learning Render, Vercel, and Firebase for live hosting." />
        </div>
      </section>

      

      
      <section className="min-h-screen flex items-center justify-around bg-white text-[#3f0d52] px-4 py-8">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-around">
          <div className="w-80 h-72 rounded-lg overflow-hidden">
            <img src={ContactImage} alt="Contact" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-semibold mb-2">Contact Me</h2>
            <div className="space-y-4">
              <ContactItem icon={<FaPhoneAlt className="text-xl" />} text="+91 8053725999" />
              <ContactItem icon={<FaEnvelope className="text-xl" />} text="kaur.simransawna@gmail.com" link="mailto:kaur.simransawna@gmail.com" />
              <ContactItem icon={<FaLinkedin className="text-xl" />} text="LinkedIn" link="https://www.linkedin.com/in/simran-kaur-68a963292/" />
              <ContactItem icon={<SiIndeed className="text-xl" />} text="Indeed" link="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" />
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


const LearningCard = ({ title, desc }) => (
  <div className="bg-[#1f132a] p-6 rounded-xl shadow-md hover:bg-[#2c1a3c] transition duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{desc}</p>
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
