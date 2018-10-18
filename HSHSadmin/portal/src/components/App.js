import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignInPage from "./SignIn";
import PanelPage from "./Panel";
import DashboardPage from "./Dashboard";
import VolunteersPage from "./Volunteers";
import InteractionsPage from "./Interactions";

import * as routes from "../constants/routes";

const App = () => (
	<Router>
		<div style={{ height: "100%", width: "100%" }}>
			<Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
			<Route exact path={routes.PANEL} component={() => <PanelPage />} />
			<Route
				exact
				path={routes.DASHBOARD}
				component={() => <DashboardPage />}
			/>
			<Route
				exact
				path={routes.VOLUNTEERS}
				component={() => <VolunteersPage />}
			/>
            <Route
                exact
                path={routes.INTERACTIONS}
                component={() => <InteractionsPage />}
            />
		</div>
	</Router>
);

export default App;
