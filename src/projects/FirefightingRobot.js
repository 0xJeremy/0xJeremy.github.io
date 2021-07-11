import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Firefighting Robot";
const coverImage = "firefighting.jpeg";
const description =
  "This robot was our entry into the Trinity International Robotic Firefighting Competition.";
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/firefighting/firefighting.jpeg`,
          `${imagePath}/firefighting/firefighting_1.JPG`,
        ]}
      />
      This robot is one of the first I've made from scratch, and was made for
      the Trinity International Robotic Firefighting Competition in the Spring
      of 2018. It's task was to listen for a tone, and when signaled would begin
      to autonomously navigate a maze and extinguish a fire. It was powered by a
      Raspberry Pi Zero and was surrounded by ultrasonic distance sensors to
      detect the walls of the maze.
      <Images space images={[`${imagePath}/firefighting/firefighting_2.JPG`]} />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
