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

const title = "µJumbo";
const coverImage = "ujumbo.jpeg";
const description =
  "µJumbo was an entry to the Trinity International Robotic Firefighting competition in the \"small robot\" category.";
const tags = {
  software: true,
  hardware: true,
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title}>
      <img
        className={classes.image}
        src={`${imagePath}/ujumbo/ujumbo.jpeg`}
        alt=""
      />
      This robot was made as part of the Tufts Robotics Club.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
