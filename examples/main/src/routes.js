import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, HashRouter, Route } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function BasicExample() {
  return (
    <HashRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home666</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
class Routes extends Component {
  render() {
    return (
      <BasicExample {...this.props}></BasicExample>
      // basename="/test"
      // <HashRouter >
      //     {/* <Route path="/" component={App} /> */}
      // </HashRouter>
    );
  }
}
export default Routes;