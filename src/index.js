import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';

ReactDOM.render(
  <Router>
  	<Switch>
  		<Route exact path="/">
    		<Home />
  		</Route>
  		<Route exact path="/contact-me">
    		<Home />
    		{/*<ContactMe />*/}
  		</Route>
  		<Route exact path="/projects">
    		<Projects />
  		</Route>
  		<Route exact path="/research">
    		{/*<Research />*/}
  		</Route>
  	</Switch>
  </Router>,
  document.getElementById('root')
);
