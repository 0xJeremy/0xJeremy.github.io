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

const title = "\"Banned From Vegas\"";
const coverImage = "vegas.jpeg";
const description =
  "This is an automatic card-dealing and sorting robot made at MakeHarvard 2020. It uses computer vision to detect and sort the cards (and a little bit of card-counting to make sure you always win).";
const tags = {
  hardware: true,
  software: true,
  hackathon: true,
};
const data = {
  github: "https://github.com/0xJeremy/MakeHarvard2020",
}

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <img
        className={classes.image}
        src={`${imagePath}/vegas/vegas.jpeg`}
        alt=""
      />
      This robot was made at MakeHarvard 2020.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
