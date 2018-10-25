import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import DateIcon from "@material-ui/icons/DateRange";
import HomeIcon from "@material-ui/icons/Home";
import ReportsIcon from "@material-ui/icons/Description";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import AdminIcon from "@material-ui/icons/PermIdentity";
import PhoneIcon from "@material-ui/icons/Phone";

export const navActionItems = (
	<div>
		<ListItem button component="a" href="/dashboard">
			<ListItemIcon>
				<HomeIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>
		<ListItem button component="a" href="/volunteers">
			<ListItemIcon>
				<RecentActorsIcon />
			</ListItemIcon>
			<ListItemText primary="Volunteers" />
		</ListItem>
		<ListItem button component="a" href="/guests">
			<ListItemIcon>
				<GroupIcon />
			</ListItemIcon>
			<ListItemText primary="Guests" />
		</ListItem>
		<ListItem button component="a" href="/interactions">
			<ListItemIcon>
				<DateIcon />
			</ListItemIcon>
			<ListItemText primary="Interactions" />
		</ListItem>
		<ListItem button component="a" href="/admin">
			<ListItemIcon>
				<AdminIcon />
			</ListItemIcon>
			<ListItemText primary="Admin" />
		</ListItem>
		<ListItem button component="a" href="/reports">
			<ListItemIcon>
				<ReportsIcon />
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItem>
	</div>
);

export const navAccountItems = (
	<div>
		<ListItem button href="#">
			<ListItemIcon>
				<PhoneIcon />
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
