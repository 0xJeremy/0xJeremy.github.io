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

const title = "Electric Longboard";
const coverImage = "longboard.jpeg";
const description =
  "This is an electric longboard made with the Tufts MAKE club.";
const tags = {
  hardware: true,
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/longboard/longboard.jpeg`}
        alt=""
      />
      This longboard was made with Tufts MAKE.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
