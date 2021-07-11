import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Autodrive";
const coverImage = "autodrive.jpeg";
const description =
  "This is a project done for ME-84 (Intro. Robotics & Mechatronics) in Fall 2018. This robot drives autonomously using image processing with markers on the ground.";
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/autodrive/autodrive.jpeg`,
          `${imagePath}/autodrive/autodrive_1.JPG`,
        ]}
      />
      This project was made as a homework assigmnet for Tufts ME-84 (Intro.
      Robotics & Mechatronics) in Fall of 2018. The assignment was to use image
      processing to make a line following robot. We did this by pointing an
      OpenMV camera facing downwards and using canny edge-detection to find the
      lines on the table. We also used a PyBoard v2 to control the servo motors
      attached to the car (acting as drive motors).
      <Images
        space
        images={[
          `${imagePath}/autodrive/autodrive_2.JPG`,
          `${imagePath}/autodrive/autodrive_3.JPG`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
