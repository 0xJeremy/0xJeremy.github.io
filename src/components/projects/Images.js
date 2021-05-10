import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const smallScreen = window.screen.width < 650;

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    marginTop: (props) => (props.space ? "3vh" : 0),
  },
  image: {
    width: "100%",
  },
}));

export default function Images(props) {
  const images = props.images;
  const classes = useStyles(props);
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
