import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const smallScreen = window.screen.width < 650;

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
  },
  image: {
    width: "100%",
  },
}));

export default function Images(props) {
  const classes = useStyles();
  const images = props.images;
  const imageSpace = 12 / images.length;
  const gridSize = smallScreen ? 12 : imageSpace;

  return (
    <div>
      <Grid container spacing={1} className={classes.grid}>
        {images.map((image) => {
          return (
            <Grid item xs={gridSize} key={image}>
              <img className={classes.image} src={image} alt="" />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
