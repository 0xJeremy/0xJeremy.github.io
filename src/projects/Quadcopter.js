import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Quadcopter UAV";
const coverImage = "quadcopter.jpeg";
const description =
  "This is a quadcopter UAV made with the Tufts MAKE club. It was originally designed to be semi-autonomous.";
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/quadcopter/quadcopter.jpeg`,
          `${imagePath}/quadcopter/quadcopter_2.jpeg`,
        ]}
      />
      This quadcopter was built with the Tufts MAKE club. The project was to
      build a quadcopter from scratch, and program it to fly semi-autonomously
      using computer vision. Unfortunately, due to semester time constraints, we
      were unable to finish the autonomous portion of the build, but it flew
      pretty well.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
