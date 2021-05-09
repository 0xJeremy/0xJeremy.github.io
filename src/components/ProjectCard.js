import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { paperColor, colorGreen, colorOrange, colorRed, colorBlue } from "./PageStyles";

const ViewProjectButton = withStyles({
  root: {
    backgroundColor: colorGreen,
    borderColor: colorGreen,
    fontFamily: [
    ].join(','),
    '&:hover': {
      backgroundColor: colorRed,
      borderColor: colorOrange,
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: colorOrange,
      borderColor: colorBlue,
    },
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
  },
})(Button);

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    background: paperColor,
    color: colorGreen
  },
  title: {
    fontSize: '2em',
    fontWeight: '600',
  },
  description: {
    color: 'white',
  },
  media: {
    height: '100%',
  },
  actions: {
    float: 'right'
  }
});

export default function ProjectCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Project Title Here"
        />
        <CardContent>
          <Typography gutterBottom className={classes.title}>
            Project Title
          </Typography>
          <Typography className={classes.description} >
            This section will contain a description for each of the projects.
            This section will contain a description for each of the projects.
            This section will contain a description for each of the projects.
            This section will contain a description for each of the projects. 
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.actions} >
        <ViewProjectButton size="medium" color="primary" variant="outlined">
          View Project
        </ViewProjectButton>
      </CardActions>

    </Card>
  );
}