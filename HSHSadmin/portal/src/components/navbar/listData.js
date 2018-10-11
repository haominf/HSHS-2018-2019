import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import DateIcon from "@material-ui/icons/DateRange";

export const navActionItems = (
	<div>
		<ListItem button href="#">
			<ListItemIcon>
				<GroupIcon />
			</ListItemIcon>
			<ListItemText primary="Volunteers" />
		</ListItem>
		<ListItem button href="#">
			<ListItemIcon>
				<DateIcon />
			</ListItemIcon>
			<ListItemText primary="Guests" />
		</ListItem>
		<ListItem button href="#">
			<ListItemIcon>
				<DateIcon />
			</ListItemIcon>
			<ListItemText primary="Interactions" />
		</ListItem>
		<ListItem button href="#">
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="Admin" />
		</ListItem>
		<ListItem button href="#">
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItem>
	</div>
);

export const navAccountItems = (
	<div>
		<ListItem button href="#">
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="Contact" />
		</ListItem>
		<ListItem button href="#">
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="Settings" />
		</ListItem>
		<ListItem button href="#">
			<ListItemIcon>
				<LogoutIcon />
			</ListItemIcon>
			<ListItemText primary="Logout" />
		</ListItem>
	</div>
);
