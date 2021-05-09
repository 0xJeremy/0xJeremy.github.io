import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { colorRed, colorBlue, colorGreen, colorYellow } from "./PageStyles";
import Toolbar from './Toolbar';
import Greeting from './Greeting';

export default function Home() {

  return (
    <div>
        <Toolbar />

        <Greeting />
    </div>
  );
}
