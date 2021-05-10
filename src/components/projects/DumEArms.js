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

const title = "Dum-E IoT Arms";
const coverImage = "dume_arms.jpeg";
const description =
  "These internet-enabled robotic arm swarm was made at the MakeHarvard hackathon in 2019. They were made to be an educational tool for teaching introductory robotics for universities.";
const tags = {
  software: true,
  hardware: true,
  hackathon: true,
};
const data = {
  github: "https://github.com/0xJeremy/Dum-E-IOT",
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <img
        className={classes.image}
        src={`${imagePath}/dume_arms/dume_arms.jpeg`}
        alt=""
      />
      This project was made for MakeHarvard 2019.
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
