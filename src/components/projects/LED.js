import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "LED Display";
const coverImage = "led_isometric.JPG";
const description =
  "This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a human-interface robot, so we made an interactive display.";
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/me134/tree/master/hw6",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/led/led_isometric.JPG`,
          `${imagePath}/led/led_3.jpg`,
          `${imagePath}/led/led_2.jpg`,
        ]}
      />
      This robot was made for a homework project as part of Tufts ME-134
      (Advanced Robotics) in the Fall of 2020. The prompt was to create a robot
      that interacts with a human by using computer vision to take input. The
      robot must respond to a number of different fundamental cues (such as head
      position, or hand position). We chose to build a large LED display (human
      for scale) made up of 300 individually addressible LEDs. It used a camera
      to enable the user to play PONG by waving their hands in the air, or snake
      by moving their head relative to the camera. Because the Raspberry Pi
      (which is driving the display) could not be loaded with the proper
      libraries to perform hand-detection, I built a real-time image streamer
      that sent data from my laptop (which could process the images) to the
      Raspberry Pi.
      <Images
        space
        images={[`${imagePath}/led/led_1.jpg`, `${imagePath}/led/led_4.jpg`]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
