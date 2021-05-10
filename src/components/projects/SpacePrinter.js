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

const title = '"Space Jam": Space Printer';
const coverImage = "spaceprinter.JPG";
const description =
  "This is a 3D printer designed to be used in zero-gravity (such as on the ISS). it was made as a senior design project at Tufts in the Fall of 2020 for Professor Doug Matson.";
const tags = {
  hardware: true,
  software: true,
};
const data = {
  github: "https://github.com/0xJeremy/senior-design",
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <img
        className={classes.image}
        src={`${imagePath}/spaceprinter/spaceprinter.JPG`}
        alt=""
      />
      This printer was made as part of Tufts mechanical engineering senior
      design (ME-73)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
