import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Nav } from "./navbar/Nav";

class ReportsPage extends Component {
	constructor(props) {
		super(props);
		let self = this;
	}

	render() {
		return (
			<div
				style={{
					backgroundColor: "#dce0e2",
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
					<main>
						<h1>THIS IS REPORTS PAGE</h1>
						<Button
							color={"secondary"}
							size={"large"}
							full-width={"true"}
							href={"/dashboard"}
							variant={"outlined"}
						>
							Back to Dashboard
						</Button>
					</main>
				</div>
			</div>
		);
	}

	// componentWillUnmount() {
	// 	if (this.statePromises) this.statePromises.forEach(p => p.cancel());
	// }
}

export default withRouter(ReportsPage);
