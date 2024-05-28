import ProjectCard from "./CardProject";
import ProjectData from "../assets/projectData.json";
import MyCard from "./MyCard";
import { useState } from "react";

export default function CarouselSection() {
  const [projectData, setProjectData] = useState(ProjectData.projects);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {projectData.map((project) => (
        <MyCard
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
