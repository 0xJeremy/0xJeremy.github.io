import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectTemplate from "./ProjectTemplate";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "75%",
    display: "block",
  },
}));

export default function Hexapod() {
  const classes = useStyles();

  return (
    <ProjectTemplate title="Hexapod (v1)">
      <img
        className={classes.image}
        src="/static/projects/hexapod/hexapod_isometric.JPG"
      />
      hello.
    </ProjectTemplate>
  );
}
