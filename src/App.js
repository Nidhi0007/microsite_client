import React from "react";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Layout/Main";
import Store from "./Layout/Store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Store} />
          <Route exact path="/sbs" component={Main} />
          <Route
            path="/login"
            component={() => {
              window.location.href =
                "https://www.members.perform.digital/login";
              return null;
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
