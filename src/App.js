import React from "react";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Layout/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            path="/login"
            component={() => {
              window.location.href = "https://www.members.perform.digital/";
              return null;
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
