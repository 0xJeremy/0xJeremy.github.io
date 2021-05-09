import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import AppBar from "@material-ui/core/AppBar";
import { colorRed, colorBlue, colorGreen, colorYellow } from "./PageStyles";
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

      <Greeting />
      <Projects />


{/*      <Grid container spacing={0}>
        <Grid item xs={12}>
          
        </Grid>

        <Grid item xs={12}>
        </Grid>
      </Grid>
*/}
    </div>
  );
}
