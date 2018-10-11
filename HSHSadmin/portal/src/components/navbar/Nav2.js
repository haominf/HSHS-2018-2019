import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import DateIcon from "@material-ui/icons/DateRange";

import { navActionItems, navAccountItems } from "./listData";

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	appFrame: {
		height: 440,
		zIndex: 1,
		overflow: "hidden",
		position: "relative",
		display: "flex",
		width: "100%"
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`
	},
	"appBar-left": {
		marginLeft: drawerWidth
	},
	"appBar-right": {
		marginRight: drawerWidth
	},
	drawerPaper: {
		position: "relative",
		width: drawerWidth
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3
	}
});

class PermanentDrawer extends React.Component {
	state = {
		anchor: "left"
	};

	handleChange = event => {
		this.setState({
			anchor: event.target.value
		});
	};

	render() {
		const { classes } = this.props;
		const { anchor } = this.state;

		const drawer = (
			<Drawer
				variant="permanent"
				classes={{
					paper: styles.drawerPaper
				}}
				anchor={anchor}
			>
				<div className={styles.toolbar} />
				<Divider />
				<List>{navActionItems}</List>
				<Divider />
				<List>{navAccountItems}</List>
			</Drawer>
		);

		let before = null;
		let after = null;

		if (anchor === "left") {
			before = drawer;
		} else {
			after = drawer;
		}

		return (
			<div className={styles.root}>
				<TextField
					id="permanent-anchor"
					select
					label="Anchor"
					value={anchor}
					onChange={this.handleChange}
					margin="normal"
				>
					<MenuItem value="left">left</MenuItem>
					<MenuItem value="right">right</MenuItem>
				</TextField>
				<div className={styles.appFrame}>
					<AppBar position="absolute" className={classNames(styles.appBar)}>
						<Toolbar>
							<Typography variant="h6" color="inherit" noWrap>
								Permanent drawer
							</Typography>
						</Toolbar>
					</AppBar>
					{before}
					<main className={styles.content}>
						<div className={styles.toolbar} />
						<Typography>
							{"You think water moves fast? You should see ice."}
						</Typography>
					</main>
					{after}
				</div>
			</div>
		);
	}
}

PermanentDrawer.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(PermanentDrawer);
export { PermanentDrawer };
