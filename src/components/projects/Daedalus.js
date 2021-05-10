import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Daedalus BLDC Motor Controller";
const coverImage = "Daedalus_Brackets_Board.png";
const description =
  "This is a custom PCB designed to drive high-speed, high-power brushless motors. It includes current monitoring and positional feedback, turning the brushless motor into a high-torque servo motor.";
const tags = {
  pcb: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/daedalus/Daedalus_Brackets_Board.png`,
          `${imagePath}/daedalus/Front.jpg`,
        ]}
      />
      This PCB is the Daedalus High-Power BLDC Motor Controller. Using the
      on-board magnetic encoder it can turn a regular brushless DC motor into a
      high-power, ultra high-precision servo motor. It uses CAN bus
      communication, and cable be daisy chained together with other Daedalus
      controllers. This is one of the first PCBs I have designed, and I expect
      to iterate on it in the future.
      <Images space images={[`${imagePath}/daedalus/Board_Layout.png`]} />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
