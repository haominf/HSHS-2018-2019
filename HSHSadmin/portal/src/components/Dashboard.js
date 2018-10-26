import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as firebase from "firebase";
import * as routes from "../constants/routes";
import { Nav } from "./navbar/Nav";
import { FloatingActionButtons } from "./dashboard/FloatingActionButtons";
import { DashboardReport } from "./dashboard/DashboardReport";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 240;
const styles = theme => ({
	root: {
		flexGrow: 1,
		height: 440,
		zIndex: 1,
		overflow: "hidden",
		position: "relative",
		display: "flex"
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	drawerPaper: {
		position: "relative",
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minWidth: 0 // So the Typography noWrap works
	},
	toolbar: theme.mixins.toolbar
});
const iconStyles = {
	smallIcon: {
		width: 36,
		height: 36
	},
	mediumIcon: {
		width: 48,
		height: 48
	},
	largeIcon: {
		width: 60,
		height: 60
	},
	small: {
		width: 72,
		height: 72,
		padding: 16
	},
	medium: {
		width: 96,
		height: 96,
		padding: 24
	},
	large: {
		width: 120,
		height: 120,
		padding: 30
	}
};

class DashboardPage extends Component {
	constructor(props) {
		super(props);
		let self = this;
		// if (!firebase.auth().currentUser) {
		// 	props.history.push(routes.SIGN_IN);
		// }
	}

	render() {
		return (
			<div
				style={{
					backgroundColor: "#dce0e2",
					height: "100%",
					width: "100%",
					margin: "auto",
					alignItems: "center",
					justifyContent: "space-evenly"
				}}
			>
				<Nav />
				<main className={styles.content}>
					<div>
						<div
							style={{
								marginLeft: "205px",
								marginTop: "65px"
							}}
						>
							<FloatingActionButtons />

							{/* <div
								style={{
									marginTop: "65px",
									marginLeft: "50px",
									marginRight: "40px",
									width: "640px",
									display: "inline-block"
								}}
							>
								<DashboardReport />
							</div>
							<div
								style={{
									marginTop: "65px",
									marginLeft: "50px",
									marginRight: "40px",
									width: "640px",
									display: "inline-block"
								}}
							>
								<DashboardReport />
							</div> */}
						</div>
					</div>
				</main>
			</div>
		);
	}

	// componentWillUnmount() {
	// 	if (this.statePromises) this.statePromises.forEach(p => p.cancel());
	// }
}

export default withRouter(DashboardPage);
