import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "FireEye";
const coverImage = "fireeye.png";
const description =
  "FireEye is an open-source real-time socket communication library designed for low-latency video streaming from remote sources. It was designed to steam a Raspberry Pi camera to a webpage.";
const tags = {
  software: true,
  oss: true,
};
const data = {
  github: "https://github.com/0xJeremy/FireEye",
  pypi: "https://pypi.org/project/FireEye/",
  npm: "https://www.npmjs.com/package/fireeye",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      FireEye is an open-source cross-language (Python / Javascript via Node.js)
      UNIX socket communication library. It was originally build and optimized
      for streaming video from a Raspberry Pi camera to remote devices in
      real-time, but has since been generalized to work for arbitrary
      communication. It is extremely easy to use and handles almost all of the
      setup for the user. It was later replaced with socket.engine (which is
      newer and better for a number of reasons).
      <Images space images={[`${imagePath}/fireeye/fireeye.png`]} />
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
