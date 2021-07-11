import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "ctrl.engine";
const coverImage = "ctrlengine.png";
const description =
  "ctrl.engine is an open-source robotics library. It provides various tools in Python to make writing software for robotics easier and faster. It gives boilerplate multi-threaded code to multiple APIs and image processing tools.";
const tags = {
  software: true,
  oss: true,
};
const data = {
  github: "https://github.com/0xJeremy/ctrl.engine",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images images={[`${imagePath}/ctrlengine/ctrlengine.png`]} />
      ctrl.engine is an open-source robotics library written in Python. It was
      designed to provide a common set of tools to quickly prototype robots
      (specifically those running on a Raspberry Pi, but in theory is
      multiplatform). It provides boilerplate multi-threaded code for a number
      of web-APIs, as well as numerous computer vision examples. It also
      supports a number of input devices like xbox controllers, and provides
      standard implementations of common algorithms (like PID controllers and
      signal filters).
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
