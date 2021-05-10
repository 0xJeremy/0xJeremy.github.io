import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Analog Clock";
const coverImage = "clock_isometric.JPG";
const description =
  "This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create an analog clock, so we created a (digital) analog clock.";
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/me134/tree/master/hw2",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/clock/clock_isometric.JPG`,
          `${imagePath}/clock/clock_1.jpg`,
          `${imagePath}/clock/clock_3.jpg`,
        ]}
      />
      This robot was made for a homework project as part of Tufts ME-134
      (Advanced Robotics) in the Fall of 2020. The prompt was to create an
      analog clock. Twisting the prompt slightly, I chose to make a "digital"
      analog clock. This clock comprises 28 individual micro-servo motors
      controlled by 2 servo drivers being controlled by a Raspberry Pi Zero.
      <Images
        space
        images={[
          `${imagePath}/clock/clock_4.jpg`,
          `${imagePath}/clock/clock_5.jpg`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
