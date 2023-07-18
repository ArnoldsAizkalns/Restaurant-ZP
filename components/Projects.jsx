import Image from "next/image";
import Link from "next/link";
import React from "react";
import edienkarte from "../public/assets/projects/Vistas nageti.jpg";
import pirts from "../public/assets/projects/pirts1.jpg";
import banket from "../public/assets/banket.jpg";
import terase from "../public/assets/terase.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#6a4e26]">
          Pakalpojumi
        </p>
        <h2 className="py-4">Ko mēs piedavājam</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ēdienkarte"
            backgroundImg={edienkarte}
            projectUrl="/edienkarte"
            tech="Plaša izvēle"
          />
          <ProjectItem
            title="SPA kompleks"
            backgroundImg={pirts}
            projectUrl="/pirts"
            tech="Pirts, baseins, banketu zāle"
          />
          <ProjectItem
            title="Banketi"
            backgroundImg={banket}
            projectUrl="/banketi"
            tech="Līdz 100 personām"
          />
          <ProjectItem
            title="Terases"
            backgroundImg={terase}
            projectUrl="/terases"
            tech="Ļoti lielas terases"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
