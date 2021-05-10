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

const title = "Fleet";
const coverImage = "fleet.png";
const description =
  "This project is an open-source hardware platform for developing robotics software. It is intended to be a low-cost, modular swarm robotic system to test swarm algorithms.";
const tags = {
  software: true,
  hardware: true,
};
const data = {
  github: "https://github.com/0xJeremy/fleet",
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <img
        className={classes.image}
        src={`${imagePath}/fleet/fleet.png`}
        alt=""
      />
      This project was made for fun :)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags };
