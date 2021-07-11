import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "viz.engine";
const coverImage = "vizengine.png";
const description =
  "viz.engine is an open-source library and framework for robot user-interfaces. It is designed to give real-time feedback about the state of the robot and provide a control interface.";
const tags = {
  software: true,
  oss: true,
};
const data = {
  github: "https://github.com/0xJeremy/viz.engine",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images images={[`${imagePath}/vizengine/vizengine.png`]} />
      viz.engine is an open-source React.js powered interface for controlling
      robots. It was originally designed to help operators handle large swarms
      of robots simultaneously by streaming real-time information about the
      state of each system, and providing a unified and straight-forward method
      of operating all the bots. It uses the socket.engine library for
      communication between the robots and the server (which allows for standard
      data to be streamed, as well as real-time video feeds from each robot).
      <Images space images={[`${imagePath}/vizengine/dashboard.png`]} />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
