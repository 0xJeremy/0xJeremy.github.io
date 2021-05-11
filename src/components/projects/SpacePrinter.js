import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = '"Space Jam": Space Printer';
const coverImage = "spaceprinter.JPG";
const description =
  "This is a 3D printer designed to be used in zero-gravity (such as on the ISS). it was made as a senior design project at Tufts in the Fall of 2020 for Professor Doug Matson.";
const tags = {
  hardware: true,
  software: true,
};
const data = {
  github: "https://github.com/0xJeremy/senior-design",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images images={[`${imagePath}/space_printer/spaceprinter.JPG`]} />
      This is a 3D printer designed to be used in *space* (specifically,
      zero-gravity environments, such as on the International Space Station). It
      was built for Professor Douglas Matson for his use in research. We also
      built the firmware from scratch for this printer given the unique control
      style and setup of the stepper motors.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
