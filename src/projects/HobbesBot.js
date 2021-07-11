import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "HobbesBot";
const coverImage = "hobbesbot.jpeg";
const description =
  'This is a robotic puppet with 7 degrees of freedom called "HobbesBot" after the tiger in Calvin and Hobbes. It was the final project from ME-84 (Intro. Robotics & Mechatronics) in Fall 2018 at Tufts.';
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/hobbesbot/hobbesbot.jpeg`,
          `${imagePath}/hobbesbot/hobbes_2.JPG`,
        ]}
      />
      HobbesBot is the final project from Tufts ME-84 (Intro. Robotics &
      Mechatronics). The assignment was to build an animatronic puppet that
      takes cues from a human, and can interact with them. We created Hobbes,
      the tiger from Calvin & Hobbes, as a 7 degrees-of-freedom robot equipped
      with computer vision. Using a Raspberry Pi and a camera (along with half
      of Google Cloud Platforms vision APIs), Hobbes determines the users mood
      and reacts accordingly. As a cherry on top, we made two IoT enabled LED
      cubes to light up when Hobbes detects the user is happy.
      <Images
        space
        images={[
          `${imagePath}/hobbesbot/hobbes_1.JPG`,
          `${imagePath}/hobbesbot/hobbes_3.JPG`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
