import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import TastingForm from "./containers/TastingForm";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={TastingForm}/>
      <Route path="new" component={TastingForm} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
