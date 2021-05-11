import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Dum-E IoT Arms";
const coverImage = "dume_arms.jpeg";
const description =
  "These internet-enabled robotic arm swarm was made at the MakeHarvard hackathon in 2019. They were made to be an educational tool for teaching introductory robotics for universities.";
const tags = {
  software: true,
  hardware: true,
  hackathon: true,
};
const data = {
  github: "https://github.com/0xJeremy/Dum-E-IOT",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/dume_arms/dume_arms.jpeg`,
          `${imagePath}/dume_arms/dume_arms_1.JPG`,
        ]}
      />
      The Dum-E IoT Arms (Dum-E being the name of the robotic arm Tony Stark
      keeps in his workshop, of course) is a project made at the MakeHarvard
      hackathon in 2019. We made them to be an educational teaching tool for
      univresity students to learn about the basics of IoT, robotics, and
      fabrication. We used them briefly in our university robotics club to teach
      some of these topics after we had made the prototypes. The arms can be
      controlled by a single centralized web-server and use ESP8266s to stream
      instructions from the internet.
      <Images
        space
        images={[
          `${imagePath}/dume_arms/dume_arms_2.JPG`,
          `${imagePath}/dume_arms/dume_arms_3.JPG`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
