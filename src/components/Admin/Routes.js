import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";

export default () =>
  <Routes>
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register}  />
    <Route path="/welcome" exact component={Welcome}  />
  </Routes>;