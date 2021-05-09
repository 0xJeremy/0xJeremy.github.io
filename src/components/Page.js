import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import { colorRed, colorBlue, colorGreen, colorYellow } from "./PageStyles";
import Toolbar from './Toolbar';
import Greeting from './Greeting';
import Projects from './Projects';

// const useStyles = makeStyles((theme) => ({
//   grid: {
//     marginTop: "6.4vh",
//   },
// }));

export default function Page() {
  return (
    <div>

      {/*<AppBar>*/}
        <Toolbar />
      {/*</AppBar>*/}

      <Greeting />

    </div>
  );
}
