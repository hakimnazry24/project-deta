import ProjectCard from "@/components/ProjectCard";
import React from "react";

const ProjectSection = () => {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-semibold text-center mb-5">Project</h1>
      <div className="grid grid-cols-3 gap-12">
        <ProjectCard
          image={"/image_placeholder.png"}
          name={"First project"}
          description={"This is my first project"}
        />
        <ProjectCard
          image={"/image_placeholder.png"}
          name={"Second project"}
          description={"This is my second project"}
        />
        <ProjectCard
          image={"/image_placeholder.png"}
          name={"Third project"}
          description={"This is my third project"}
        />
        <ProjectCard
          image={"/image_placeholder.png"}
          name={"Fourth project"}
          description={"This is my fourth project"}
        />
        <ProjectCard
          image={"/image_placeholder.png"}
          name={"Fifth project"}
          description={"This is my fifth project"}
        />
        <ProjectCard
          image={"/image_placeholder.png"}
          name={"Sixth project"}
          description={"This is my sixth project"}
        />
      </div>
    </main>
  );
};

export default ProjectSection;
