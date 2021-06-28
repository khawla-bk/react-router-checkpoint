import React from "react";
import { Route } from "react-router-dom";
import Description from "./Description";
import Trailer from "./Trailer";
import App from "../App";

function Router() {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route path="/description" component={Description} />
      <Route path="/trailer" component={Trailer} />
    </div>
  );
}

export default Router;
