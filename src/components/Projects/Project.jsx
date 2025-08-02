import React from "react";
import Digi24Image from "../../assets/Digi24.png";
import DisenographicImage from "../../assets/Diseno.png";
import ConceptzhomeImage from "../../assets/Conceptz.png";
import GrowthImage from "../../assets/Ayurgrowth.png";

export default function Projects() {
  const projects = [
    {
      title: "Digi24India.in",
      img: Digi24Image,
      link: "https://digi24india.in",
      description: "A dynamic news platform delivering real-time updates and curated content across categories.",
      tech: ["WordPress", "HTML", "CSS", "SEO"],
    },
    {
      title: "Disenographic.com",
      img: DisenographicImage,
      link: "https://disenographic.com",
      description: "A creative digital marketing agency website focusing on design, branding, and campaigns.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "ConceptzHome.in",
      img: ConceptzhomeImage,
      link: "https://conceptzhome.in",
      description: "A real estate site showcasing premium properties with detailed layouts and features.",
      tech: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      title: "Ayurgrowth.in",
      img: GrowthImage,
      link: "https://ayurgrowth.in",
      description: "An Ayurvedic healthcare e-commerce site offering organic wellness products.",
      tech: ["WordPress", "Elementor", "WooCommerce", "SEO"],
    },
  ];

  return (
    <section className="bg-[#090008] text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl overflow-hidden shadow-lg flex flex-col transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <h3 className="text-2xl font-bold mb-2 text-center">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-3 text-center">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#090008] text-white px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block text-center bg-[#090008] text-white px-4 py-2 rounded-full hover:bg-white hover:text-black border border-[#090008] transition duration-300"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
