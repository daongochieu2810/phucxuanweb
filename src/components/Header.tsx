import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, HashRouter as Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export interface HeaderProps {
  sections: any[];
  title: string;
}

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const { sections, title } = props;
  const [currRoute, setCurrRoute] = useState<string>("");

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Router basename="/">
            <Link
              to={section.url}
              style={{ textDecoration: "none", color: "black" }}
            >
              {section.title}
            </Link>
          </Router>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
