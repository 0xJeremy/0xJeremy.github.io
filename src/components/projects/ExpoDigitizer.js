import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "75%",
    display: "block",
    paddingBottom: "2vh",
  },
}));

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
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/expo_digitizer/expo_digitizer.jpeg`}
        alt=""
      />
      This robot was made at Tufts Polyhack in 2017.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
