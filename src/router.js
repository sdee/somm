import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import NewTasting from "./containers/NewTasting";
import NotFound from "./components/NotFound";
import TastingProfile from "./containers/TastingProfile";
import TastingGallery from "./containers/TastingGallery";

// build the router
const router = (
	<Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={NewTasting} />
			<Route path="new" component={NewTasting} />
			<Route path="tasting/:tastingId" component={TastingProfile} />
      <Route path="tastings" component={TastingGallery} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
);

// export
export { router };
