import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import projectPages from "./projects";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      {Object.entries(projectPages).map(([name, project]) => (
        <Route
          exact
          path={`/projects/${name}`}
          key={name}
          component={project.Component}
        />
      ))}
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
