import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Sticky } from "../components";
import Toolbar from "../components/Toolbar";
import { Hero, About, Showcase, OtherProjects, Contact } from "../sections";

const thinScreen = window.screen.width < 750;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: (props) => (props.thinScreen ? "90%" : "75%"),
    margin: "auto",
  },
}));

export default function Home() {
  const classes = useStyles({ thinScreen });

  return (
    <div>
      <Toolbar />

      <div className={classes.root}>
        <Hero />
        <About />
        <Showcase />
        <OtherProjects />
        <Contact />
      </div>

      <Sticky />
    </div>
  );
}
