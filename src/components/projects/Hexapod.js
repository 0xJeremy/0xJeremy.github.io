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
          `${imagePath}/hexapod/hexapod_2.jpg`,
          `${imagePath}/hexapod/hexapod_3.jpg`,
        ]}
      />
      This robot was made for the final project of Tufts ME-134 (Advanced
      Robotics) in the Fall of 2020. The prompt was to create a robot capable of
      navigating an obstacle course (comprised of a tunnel to go through, a wall
      to climb over, and a patch of rough terrain) autonomously. This hexapod
      uses a Raspberry Pi 4 (and camera) to perform the onboard processing and
      18 high-torque servo motors for actuation. It did pretty well on the wall.
      <Images
        space
        images={[
          `${imagePath}/hexapod/hexapod_1.jpg`,
          `${imagePath}/hexapod/hexapod_4.jpg`,
          `${imagePath}/hexapod/hexapod_5.jpg`,
        ]}
      />
      <Images
        images={[
          `${imagePath}/hexapod/hexapod_6.jpg`,
          `${imagePath}/hexapod/hexapod_7.jpg`,
          `${imagePath}/hexapod/hexapod_8.jpg`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
