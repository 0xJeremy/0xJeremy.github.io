import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Research from './components/Research';
import routes from './components/projects';

ReactDOM.render(
  <Router>
  	<Switch>
  		<Route exact path="/" component={Home} />
  		<Route exact path="/contact" component={Contact} />
  		<Route exact path="/projects" component={Projects} />
  		<Route exact path="/research" component={Research} />
        {Object.entries(routes).map(([name, component]) => (
        	<Route exact path={`/projects/${name}`} key={name} component={component} />
        ))}
  	</Switch>
  </Router>,
  document.getElementById('root')
);
