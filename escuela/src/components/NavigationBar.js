import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a className="navbar-brand" href="#">
				Logo
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
					</li>
					<li className="nav-item active">
						<NavLink to="/signup" className="nav-link">
							Register
						</NavLink>
					</li>
					<li className="nav-item active">
						<NavLink to="/users" className="nav-link">
							DB Users
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
