import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "µJumbo";
const coverImage = "ujumbo.jpeg";
const description =
  'µJumbo was an entry to the Trinity International Robotic Firefighting competition in the "small robot" category.';
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/ujumbo/ujumbo.jpeg`,
          `${imagePath}/ujumbo/jumbo_3.JPG`,
        ]}
      />
      µJumbo was an entry to the Trinity International Robotic Firefighting
      competition in the "smallest robot" category. Unfortunately, that year it
      was only the second smallest robot (losing by a matter of several cubic
      centimeters). This robot was to navigate a maze autonomously and
      extinguish a fire (a candle). It was also required to recognize a tone
      played as the starting signal (thus the microphone and filtering circuit
      on the top of the robot). We equipped this robot with an Arduino Nano,
      wheels encoders, and multiple time-of-flight distance sensors placed
      around the robot.
      <Images
        space
        images={[
          `${imagePath}/ujumbo/jumbo_2.JPG`,
          `${imagePath}/ujumbo/jumbo_4.JPG`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
