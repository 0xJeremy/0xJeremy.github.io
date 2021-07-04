import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "socket.engine";
const coverImage = "socketengine.png";
const description =
  "socket.engine is the open-source successor to FireEye. It enabled real-time communication between devices that is optimized to be light-weight and very fast.";
const tags = {
  software: true,
  oss: true,
};
const technology = ["Python", "Node.js", "Unix Sockets", "ZMQ"];
const data = {
  github: "https://github.com/0xJeremy/socket.engine",
  pypi: "https://pypi.org/project/socket.engine/",
  npm: "https://www.npmjs.com/package/socket.engine",
};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images images={[`${imagePath}/socketengine/socketengine.png`]} />
      socket.engine is the successor to FireEye. It is a real-time
      bi-directional UNIX socket communication library built on top of ZMQ
      sockets. It operates at extremely high speeds and is even capable of
      streaming full video across the sockets. It was originally designed for
      use in robots, but provides an interface to stream arbitrary data across
      arbitrary devices. It was written in Python and Javascript (via Node.js).
      It also holds the distinction of being my most successful project on
      GitHub. The source is published on GitHub, and it is available for
      download on PIP via PyPi, and on NPM.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, technology, tags, data };
