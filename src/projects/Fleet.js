import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Fleet";
const coverImage = "fleet.png";
const description =
  "This project is an open-source hardware platform for developing robotics software. It is intended to be a low-cost, modular swarm robotic system to test swarm algorithms.";
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/fleet",
};
const technology = ["Python", "Computer Vision", "Solidworks"];

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/fleet/fleet.png`,
          `${imagePath}/fleet/fleet2.png`,
          `${imagePath}/fleet/fleet3.jpeg`,
        ]}
      />
      "Fleet" is a series of small, modular robots I made as an open-source
      hardware platform for developing swarm robotics software. It is intended
      to be a low cost solution for labs, researchers, and hobbiests to
      experiment with cutting edge swarm algorithms. Each robot is equipped with
      a Raspberry Pi, 2x DC motors with encoders, Raspberry Pi camera, and
      batteries to last several hours. Newer versions also have front and back
      facing time of flight distance sensors.
      <Images
        space
        images={[
          `${imagePath}/fleet/fleet4.jpeg`,
          `${imagePath}/fleet/fleet5.JPG`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, technology, tags, data };
