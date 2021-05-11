import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = '"Banned From Vegas"';
const coverImage = "vegas.jpeg";
const description =
  "This is an automatic card-dealing and sorting robot made at MakeHarvard 2020. It uses computer vision to detect and sort the cards (and a little bit of card-counting to make sure you always win).";
const tags = {
  hardware: true,
  software: true,
  hackathon: true,
};
const data = {
  github: "https://github.com/0xJeremy/MakeHarvard2020",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/vegas/vegas.jpg`,
          `${imagePath}/vegas/vegas2.jpeg`,
        ]}
      />
      "Banned From Vegas" is an automatic card-dealing and sorting robot made at
      MakeHarvard 2020. It uses computer vision to detect and sort a deck of
      cards (and with a little bit of card-counting thrown in can make the
      operator always win at cards). It was built over the course of 24 hours
      and was powered by a Raspberry Pi and a large number of servos and motors.
      The end result worked shockingly well.
      <Images
        space
        images={[
          `${imagePath}/vegas/vegas3.jpeg`,
          `${imagePath}/vegas/vegas4.jpeg`,
        ]}
      />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
