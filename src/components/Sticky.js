import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { fontMono, orange, slate, AStyled } from "./common";

const smallScreen = window.screen.height < 850;
const thinScreen = window.screen.width < 950;
const sideSpace = thinScreen ? "20px" : "40px";

const useSideStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "0",
    left: (props) => (props.side === "left" ? sideSpace : "auto"),
    right: (props) => (props.side === "right" ? sideSpace : "auto"),
    color: orange,
    fontSize: "2em",
    fontFamily: fontMono,
    width: "40px",
  },
}));

const useStyles = makeStyles((theme) => ({
  socialList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 0,
    padding: 0,
    listStyle: "none",
    "&::after": {
      content: '""',
      display: "block",
      width: "1px",
      height: "90px",
      margin: "0 auto",
      backgroundColor: orange,
    },
  },
  list: {
    marginBottom: "16px",
  },
  listItem: {
    transition: "0.3s",
    padding: "4px",
    "&:hover": {
      transform: "translateY(-3px)",
      color: slate,
      cursor: "pointer",
    },
  },
  emailBar: {
    color: orange,
    "&::after": {
      content: '""',
      display: "block",
      width: "1px",
      height: "90px",
      margin: "0 auto",
      backgroundColor: orange,
    },
  },
  email: {
    writingMode: "vertical-rl",
    fontSize: "0.45em",
    marginBottom: "24px",
    // TODO: fix this spacing, it's disgusting
    paddingLeft: "12px",
    paddingBottom: "4px",
    verticalAlign: "text-bottom",
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-3px)",
      color: slate,
      cursor: "pointer",
    },
  },
}));

function StickySide(props) {
  const classes = useSideStyles(props);

  return <div className={classes.root}>{props.children}</div>;
}

export function Sticky(props) {
  const classes = useStyles({ smallScreen });
  const showSticky = window.screen.width > 750;

  return (
    <div>
      {showSticky && (
        <StickySide side="left">
          <ul className={classes.socialList}>
            <div className={classes.list}>
              <AStyled href="https://github.com/0xJeremy/">
                <li className={classes.listItem}>
                  <GitHubIcon />
                </li>
              </AStyled>
              <AStyled href="https://www.linkedin.com/in/jeremy-kanovsky/">
                <li className={classes.listItem}>
                  <LinkedInIcon />
                </li>
              </AStyled>
              <AStyled href="mailto:kanovsky.jeremy@gmail.com/">
                <li className={classes.listItem}>
                  <MailOutlineIcon />
                </li>
              </AStyled>
            </div>
          </ul>
        </StickySide>
      )}
      {showSticky && (
        <StickySide side="right">
          <div className={classes.emailBar}>
            <AStyled href="mailto:kanovsky.jeremy@gmail.com">
              <div className={classes.email}>kanovsky.jeremy@gmail.com</div>
            </AStyled>
          </div>
        </StickySide>
      )}
    </div>
  );
}
