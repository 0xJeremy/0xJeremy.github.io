import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Icarus Power Distribution Board";
const coverImage = "Icarus_Board.png";
const description =
  "This is a custom PCB power distribution board designed for use with the Daedalus BLDC motor controller for driving high-current motors and the Helios Raspberry Pi hat. It has 6 power breakouts.";
const tags = {
  pcb: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/icarus/Icarus_Board.png`,
          `${imagePath}/icarus/Front.jpg`,
        ]}
      />
      This PCB was made as a companion board to the Daedalus motor controller,
      and provides 6x high-current power breakouts from a single source. Along
      with providing power, it has a host of other features like power shutoff,
      current draw monitoring, and temperature sensing. It communicates with the
      CAN bus protocol and can be daisy-chained with a number of other devices
      (including the Helios Pi-Hat and the Daedalus Motor Controller). This is
      one of the first PCBs I've made and I expect to iterate on it in the
      future.
      <Images space images={[`${imagePath}/icarus/Board_Layout.png`]} />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
