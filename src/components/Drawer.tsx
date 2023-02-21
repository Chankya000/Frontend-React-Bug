import React from "react";
import { NavLink } from "react-router-dom";
import bug from "../images/logo.png";

const Drawer = () => {
	return (
		<div className="sidebar-drawer">
			<div className="logo">
				<img src={bug} />
			</div>
			<div className="item">
				<NavLink to="/dashboard">Dashboard</NavLink>
			</div>
			<div className="item">
				<NavLink to="/admin">Admin</NavLink>
			</div>
			<div className="item">
				<NavLink to="/issues">Issues</NavLink>
			</div>
		</div>
	);
};

export default Drawer;
