import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="container navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="btn btn-primary">Back</span>
			</Link>
			<div className="ml-auto">
				<Link to="/newcontact">
					<button className="btn btn-primary">New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
