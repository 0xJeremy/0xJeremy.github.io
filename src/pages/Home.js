import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "../components/Toolbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Showcase from "../components/Showcase";
import OtherProjects from "../components/OtherProjects";
import Contact from "../components/Contact";
import Sticky from "../components/Sticky";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "75%",
    margin: "auto",
  },
}));

export default function Home() {
  const classes = useStyles();

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
