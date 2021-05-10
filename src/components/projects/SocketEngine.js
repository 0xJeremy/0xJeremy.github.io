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

const title = "socket.engine";
const coverImage = "socketengine.png";
const description =
  "socket.engine is the open-source successor to FireEye. It enabled real-time communication between devices that is optimized to be light-weight and very fast.";
const tags = {
  software: true,
  oss: true,
};
const data = {
  github: "https://github.com/0xJeremy/socket.engine",
  pypi: "https://pypi.org/project/socket.engine/",
  npm: "https://www.npmjs.com/package/socket.engine",
};

export default function Component() {
  const classes = useStyles();

  return (
    <ProjectTemplate title={title} data={data}>
      <img
        className={classes.image}
        src={`${imagePath}/socketengine/socketengine.png`}
        alt=""
      />
      This project was made for fun :) (and out of necessity)
    </ProjectTemplate>
  );
}

export { Component, title, coverImage, description, tags, data };
