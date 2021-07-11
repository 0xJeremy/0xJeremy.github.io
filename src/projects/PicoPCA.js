import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Raspberry Pi Pico Servo Driver";
const coverImage = "pico_pca.JPG";
const description =
  "This is a PCB daughterboard for the Raspberry Pi Pico that carries a PCB9685 16 channel servo-driver.";
const tags = {
  software: true,
  pcb: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/pico_pca/pico_pca.JPG`,
          `${imagePath}/pico_pca/pico_pca_1.JPG`,
          `${imagePath}/pico_pca/pico_pca_2.JPG`,
        ]}
      />
      This PCB is a breakout board for the Raspberry Pi Pico. It carries a
      PCA9685 16-channel PWM driver chip, and provides breakouts for 16 servos.
      It also includes breakouts for Stemma QWIIC connectors on the side of the
      board.
      <Images
        space
        images={[
          `${imagePath}/pico_pca/pico_pca_3.JPG`,
          `${imagePath}/pico_pca/pico_pca_4.JPG`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
