import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "LEGO Robots";
const coverImage = "lego.jpeg";
const description =
  "These are a series of LEGO robots made for ME-84 (Intro. Robotics & Mechatronics) in Fall 2018 at Tufts University.";
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/lego/lego.jpeg`,
          `${imagePath}/lego/iot_arms_1.JPG`,
          `${imagePath}/lego/iot_arms_2.JPG`,
          `${imagePath}/lego/iot_arms_4.JPG`,
        ]}
      />
      These are a series of robots made for Tufts ME-84 (Intro. Robotics &
      Mechatronics) in the Fall of 2018. Each one was a homework assignment, and
      all the robots were programmed in LabVIEW. The assignments include making
      a kinetic art sculpture, an wirelessly-communicating clock, a childrens
      toy, and a remote-control robotic arm. All these robots used the LEGO EV3
      platform.
      <Images
        space
        images={[
          `${imagePath}/lego/clock_1.JPG`,
          `${imagePath}/lego/clock_3.JPG`,
        ]}
      />
      <Images
        images={[
          `${imagePath}/lego/towers_1.JPG`,
          `${imagePath}/lego/towers_2.JPG`,
        ]}
      />
      <Images
        images={[
          `${imagePath}/lego/gear_1.JPG`,
          `${imagePath}/lego/gear_2.JPG`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
