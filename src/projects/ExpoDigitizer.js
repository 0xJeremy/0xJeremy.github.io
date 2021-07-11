import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const title = "Expo Digitizer";
const coverImage = "expo_digitizer.jpeg";
const description =
  "This is an attachment for an Expo marker to turn it into an active digitizer.";
const tags = {
  software: true,
  hardware: true,
  hackathon: true,
};

export default function Component() {
  return (
    <ProjectTemplate title={title}>
      <Images
        images={[
          `${imagePath}/expo_digitizer/expo_digitizer.jpeg`,
          `${imagePath}/expo_digitizer/expo_digitizer_2.jpeg`,
        ]}
      />
      This project was made as part of Tufts Polyhack in Fall 2017. It is an
      attachment for an Expo marker to turn it into an active digitizer. Using
      an accelerometer mounted to the marker, and a button to detect when it
      makes contact with the board, this marker could generate a PDF of the
      hardwriting of the user.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
