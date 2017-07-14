import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import New from "./components/New";
import NotFound from "./components/NotFound";
import TastingProfile from "./containers/TastingProfile";

// build the router
const router = (
	<Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={New} />
			<Route path="new" component={New} />
			<Route path="tasting/:tastingId" component={TastingProfile} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
);

// export
export { router };
