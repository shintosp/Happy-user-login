import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";

import "./App.css";
import UserList from "./components/userList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/userList" component={UserList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
