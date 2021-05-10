import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Raspberry Pi Pico Oscilloscope";
const coverImage = "pico_oscilloscope.png";
const description =
  "This is an open-source project to turn the $4 Raspberry Pi Pico into a (reasonable) powerful 4-channel oscilloscope using the onboard analog to digital converters.";
const tags = {
  software: true,
};
const data = {
  github: "https://github.com/0xJeremy/Pico-Oscilloscope",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images images={[`${imagePath}/pico_oscilloscope/repo_logo.png`]} />
      As the final project for Tufts ME-193 MPP (Microcontroller Programming
      Projects) in the Spring of 2021, I turned the $4 Raspberry Pi Pico into a
      (reasonably) powerful 4-channel oscilloscope using the onboard analog to
      digital converters. The Pico streams the ADC readings over a USB to a host
      device (either a Raspberry Pi or any computer), which displays the data in
      a webpage. The idea being this project mimics the functionality of
      OctoPrint (the cloud 3D printer manager software) but for an Oscilloscope.
      This would make its use ideal in makerspaces or shared electronics labs.
      The webpage was written in React.js using Plot.js. The code on the Pico
      uses both cores and was written to run as quickly as possible in C.
      <Images
        space
        images={[`${imagePath}/pico_oscilloscope/pico_oscilloscope.png`]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
