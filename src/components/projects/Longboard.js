import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Electric Longboard";
const coverImage = "longboard.jpeg";
const description =
  "This is an electric longboard made with the Tufts MAKE club.";
const tags = {
  hardware: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/longboard/longboard.jpeg`,
          `${imagePath}/longboard/longboard_1.jpeg`,
        ]}
      />
      This was a project with the Tufts MAKE club in which we built an electric
      longboard. It was a pretty straight forward project, and the end result
      worked suprisingly well.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
