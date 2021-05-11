import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Drivable Couch";
const coverImage = "couch.png";
const description =
  "This is a project done as part of the Tufts Robotics club in which we built a drivable, remote-controlled couch. It's pretty much exactly what it sounds like.";
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/couch/couch.png`,
          `${imagePath}/couch/couch2.jpeg`,
        ]}
      />
      This is a robotic couch. It is remote-controlled via an xbox controller. It can carry three people. It's exactly what it sounds like, and is a ton of fun. This project was made with the Tufts Robotics Club, and was one of my first large-scale robotics projects. It was built using FIRST robotics hardware, and programmed in C++. At one point we had an actual couch on it, but due to storage problems it had to be thrown out.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
