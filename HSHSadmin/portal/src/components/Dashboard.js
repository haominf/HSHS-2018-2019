import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as firebase from "firebase";
import * as routes from "../constants/routes";
import { Nav } from "./navbar/Nav";

class DashboardPage extends Component {
	constructor(props) {
		super(props);
		let self = this;
		if (!firebase.auth().currentUser) {
			props.history.push(routes.SIGN_IN);
		}
	}

	render() {
		return (
			<div
				style={{
					backgroundColor: "#d7dfe5",
					height: "100%",
					width: "100%",
					flexDirection: "row",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					margin: "auto",
					flexWrap: "wrap"
				}}
			>
				<div>
					<Nav />
					<Button
						color={"primary"}
						size={"large"}
						full-width={"true"}
						href={"/panel"}
						variant={"outlined"}
					>
						Push me
					</Button>
				</div>
			</div>
		);
	}

	// componentWillUnmount() {
	// 	if (this.statePromises) this.statePromises.forEach(p => p.cancel());
	// }
}

export default withRouter(DashboardPage);
