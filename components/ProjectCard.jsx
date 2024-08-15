import React from "react";
import Image from "next/image";

const ProjectCard = ({ image, name, description }) => {
  return (
    <div className="rounded-md shadow-md max-w-[300px] h-full transition hover:scale-105 ease-in-out hover:shadow-lg">
      <Image src={image} width={300} height={300} alt="project image" />
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <h2 className="text-lg mt-5">{description}</h2>
      </div>


    </div>
  );
};

export default ProjectCard;
