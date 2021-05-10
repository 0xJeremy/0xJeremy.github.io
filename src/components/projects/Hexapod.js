import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Hexapod";
const coverImage = "hexapod_isometric.JPG";
const description =
  "This was the final project for Tufts ME-134 (Advanced Robotics) in Fall 2020. We were tasked with creating a robot that could navigate an obstacle course (containing a tunnel, wall, and rough terrain) autonomously.";
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/me134/tree/master/final",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/hexapod/hexapod_isometric.JPG`,
          `${imagePath}/hexapod/hexapod_isometric.JPG`,
        ]}
      />
      This robot was made for ME-134 (Advanced Robotics) at Tufts University in
      the Fall of 2020.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
