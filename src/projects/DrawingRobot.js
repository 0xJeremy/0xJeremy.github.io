import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Drawing Robot";
const coverImage = "drawing_isometric.JPG";
const description =
  "This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a robotic arm capable of writing our initials.";
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/me134/tree/master/hw3/v2",
};
const technology = ["Python", "Solidworks", "Raspberry Pi"];

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/drawing_robot/drawing_isometric.JPG`,
          `${imagePath}/drawing_robot/drawing_robot_1.jpg`,
          `${imagePath}/drawing_robot/drawing_robot_2.jpg`,
        ]}
      />
      This robot was made as a homework project for Tufts ME-134 (Advanced
      Robotics) in the Fall of 2020. The prompt was to create a robotic arm
      capable of writing our initials. This robot arm (which is the second
      iteration, the first being a standard 3-DOF vertical arm) is capable of
      writing arbitrary shapes and letters. Instead of hard-coding the positions
      of the arms for each point of our initials, I wrote an SVG parser and
      pather in Python that dissects any arbitrary SVG file and generates
      "g-code" (really just tuples of position for motors 1 and 2) which the arm
      them reads through and executes. It was pretty successful.
      <Images
        space
        images={[
          `${imagePath}/drawing_robot/drawing_robot_3.jpg`,
          `${imagePath}/drawing_robot/drawing_robot_4.jpg`,
          `${imagePath}/drawing_robot/drawing_robot_5.jpg`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, technology, data };
