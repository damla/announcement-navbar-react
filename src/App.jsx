import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
