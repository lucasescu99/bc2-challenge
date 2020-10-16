import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Passenger from "./components/passenger";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/passengers" component={Home} />
        <Route exact path="/passengers/:id" component={Passenger} />
        <Redirect path="/" to="/passengers" />
      </Switch>
    </div>
  );
}

export default App;
