import React from "react";
import NavbarContainer from "./components/NavbarContainer";
import LoginContainer from "./components/LoginContainer";
import RegisterContainer from "./components/RegisterContainer";
import { Switch, Route } from "react-router";
import Movie from "./commons/Movie";
import CardContainer from "./components/CardContainer";
import "./assets/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavbarContainer />
      <Switch>
        <div className="app">
          <Route path="/register">
            <RegisterContainer />
          </Route>

          <Route path="/login">
            <LoginContainer />
          </Route>

          <Route path="/search">
            <CardContainer />
          </Route>

          <Route path="/movie/:id">
            <Movie />
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
