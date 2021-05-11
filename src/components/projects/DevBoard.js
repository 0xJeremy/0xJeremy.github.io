import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "STM32 Development Board";
const coverImage = "devboard.JPG";
const description =
  "This is a development breakout board for the STM32F405 series microcontroller. I made it to learn about PCB design and embedded microcontroller programming.";
const tags = {
  software: true,
  pcb: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/devboard/devboard.JPG`,
          `${imagePath}/devboard/devboard_5.JPG`,
        ]}
      />
      This PCB is a custom-designed breakout for the STM32F405 series
      microcontroller. I made it to practice PCB design, and learn about
      programming embedded microcontrollers from scratch. I designed a custom
      power-chain for supplying power to the MCU and added breakouts around the
      side for serial breakouts.
      <Images
        space
        images={[
          `${imagePath}/devboard/devboard_4.JPG`,
          `${imagePath}/devboard/devboard_3.JPG`,
        ]}
      />
      <Images
        images={[
          `${imagePath}/devboard/devboard_1.JPG`,
          `${imagePath}/devboard/devboard_2.JPG`,
        ]}
      />
      <Images images={[`${imagePath}/devboard/devboard_layout.JPG`]} />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
