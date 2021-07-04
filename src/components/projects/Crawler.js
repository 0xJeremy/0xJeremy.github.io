import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Crawling Robot";
const coverImage = "crawler_isometric.JPG";
const description =
  'This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a "crawling robot", so we created a modular robot that rolls end over end.';
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/me134/tree/master/hw5",
};
const technology = ["Python", "Solidworks", "Raspberry Pi"];

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/crawler/crawler_isometric.JPG`,
          `${imagePath}/crawler/crawler_1.JPG`,
          `${imagePath}/crawler/crawler_3.jpg`,
        ]}
      />
      This robot was made as a homework project for Tufts ME-134 (Advanced
      Robotics) in the Fall of 2020. The prompt was to create a "crawling robot"
      (defined as: a robot which uses it's entire body to locomote). This robot
      rolls segments of it's body over one another in series to create a
      crawling / rolling motion. It is modular with each segment containing a
      piece of the robot (Raspberry Pi Zero, 2x voltage regulators, 2x servo
      drivers, 3x LiPo batteries).
      <Images
        space
        images={[
          `${imagePath}/crawler/crawler_4.jpg`,
          `${imagePath}/crawler/crawler_5.jpg`,
          `${imagePath}/crawler/crawler_6.jpg`,
        ]}
      />
      <Images
        images={[
          `${imagePath}/crawler/crawler_2.jpg`,
          `${imagePath}/crawler/crawler_7.jpg`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, technology, data };
