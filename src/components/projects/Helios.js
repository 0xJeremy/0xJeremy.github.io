import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Helios Pi-Hat Robot Controller";
const coverImage = "Helios_Board.png";
const description =
  "This is a custom PCB Raspberry Pi hat designed to enable CAN bus communication and high-precision servo control. It can also supply power to the Pi.";
const tags = {
  pcb: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/helios/Helios_Board.png`,
          `${imagePath}/helios/Board_Layout.png`,
        ]}
      />
      This PCB is the Helios Pi-Hat Robot Controller. It is a companion board to
      the Daedalus Motor controller. It provides 4x high-speed CAN bus lines
      (through the 2x on-board STM32 microprocessors), along with a host of
      other features such as absolute orientation sensing (by providing sockets
      for a Bosch BNO-055 sensor), breakouts for 12 servo motors (6x
      high-precision, 6x standard), and by providing up to 3.5 amps to power the
      Raspberry Pi host. This is one of the first PCBs I've designed, and I
      expect to iterate on it in the future.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
