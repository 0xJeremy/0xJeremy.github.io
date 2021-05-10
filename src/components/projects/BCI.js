import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Tufts BCI Team";
const coverImage = "bci.png";
const description =
  "As part of the Tufts BCI (Brain-Computer Interface) team, I created a user-interface for viewing real-time brain activity on a 3D model. Data can be streamed from a remote sensor to the page.";
const tags = {
  software: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      The Tufts BCI Team (Brain-Computer Interface Team) is a cross-major team
      working on new interfaces for computers, devices, and robots. It uses
      hardware from OpenBCI and some custom software we've written. I was
      responsible for creating a user-interface for streaming, in real-time,
      data from remote sensors to an interface which would display the brain
      activity onto a 3D model of the brain. This interface I originally wrote
      in vanilla HTML/CSS/Javascript, but later I re-wrote it in React.js. I
      also made the team logo (below) which I an unreasonably proud of.
      <Images space images={[`${imagePath}/bci/bci.png`]} />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
