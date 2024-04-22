import ProjectCard from "./CardProject";
import ProjectData from "../assets/projectData.json";
import { useState } from "react";

export default function CarouselSection() {
  const [projectData, setProjectData] = useState(ProjectData.projects);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          desc={project.description}
          img={project.img}
          tech={project.tech}
          github={project.github}
        />
      ))}
    </div>
  );
}
