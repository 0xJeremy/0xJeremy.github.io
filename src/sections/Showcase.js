import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SectionHeader } from "../components/common";
import { ShowcaseProject } from "../components";
import * as Hexapod from "../projects/Hexapod";
import * as Meteorites from "../projects/Meteorites";
import * as Daedalus from "../projects/Daedalus";

const thinScreen = window.screen.width < 950;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "30vh",
    width: (props) => (props.thinScreen ? "100%" : "75%"),
  },
  firstProject: {
    // TODO: De-duplicate this with project
    marginTop: "5vh",
    marginBottom: "10vh",
  },
  project: {
    marginTop: "10vh",
    marginBottom: "10vh",
  },
}));

export function Showcase(props) {
  const classes = useStyles({ thinScreen });

  return (
    <div className={classes.root} id="projects">
      <SectionHeader number="2" text="Some Things I've Built" />
      <div className={classes.firstProject}>
        <ShowcaseProject project={Hexapod} />
      </div>
      <div className={classes.project}>
        {!thinScreen && <ShowcaseProject project={Meteorites} right />}
        {thinScreen && <ShowcaseProject project={Meteorites} />}
      </div>
      <div className={classes.project}>
        <ShowcaseProject project={Daedalus} />
      </div>
    </div>
  );
}
