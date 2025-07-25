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
  },
  {
    title: "Disenographic.com",
    img: DisenographicImage,
    link: "https://disenographic.com",
  },
  {
    title: "ConceptzHome.in",
    img: ConceptzhomeImage,
    link: "https://conceptzhome.in",
  },
  {
    title: "Ayurgrowth.in",
    img: GrowthImage,
    link: "https://creyclothing.com",
  },
];

  return (
    <section className="bg-[#090008] text-white  py-16 px-4">
      <h2 className="text-4xl font-bold text-center p mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white  rounded-xl overflow-hidden shadow-lg text-black flex flex-col"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <h3 className="text-xl text-center font-semibold mb-4">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-[#090008] text-white px-3 py-1 rounded-full text-center hover:bg-white hover:text-black border border-[#090008] transition duration-300"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
