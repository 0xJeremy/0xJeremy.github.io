import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "QBot";
const coverImage = "qbot.jpeg";
const description =
  "QBot was a robot made as part of ME-84 (Intro. Robotics & Mechatronics) in Fall 2018. It uses image recognition to respond to commands from QR codes.";
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[`${imagePath}/qbot/qbot.jpeg`, `${imagePath}/qbot/bot_1.JPG`]}
      />
      This robot was a homework project from Tufts ME-84 (Intro. Robotics &
      Mechatronics). The assignment was to create a robot that takes its cues
      for movement from a camera (computer vision). We created a driving robot
      that uses an OpenMV camera to recognize QR tags representing "move
      forward", "move backward", "turn left", "turn right", "stop", etc. The
      OpenMV camera commanded a PyBoard v2 which in turn sent commands to the
      two servo motors (here being used as drive motors).
      <Images
        space
        images={[`${imagePath}/qbot/bot_2.JPG`, `${imagePath}/qbot/bot_3.JPG`]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
