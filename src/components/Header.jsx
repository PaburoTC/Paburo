import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SCSS/Header.scss'

const Header = () => {

	return(
		<header>
			<NavLink to="/articles"   activeClassName="activeNav">
				<span>Articles</span>
				<div/>
			</NavLink>
			<NavLink to="/experience"   activeClassName="activeNav">
				<span>Experience</span>
				<div/>
			</NavLink>
			<NavLink to="/education"   activeClassName="activeNav">
				<span>Education</span>
				<div/>
			</NavLink>
			<NavLink to="/projects"   activeClassName="activeNav">
				<span>Projects</span>
				<div/>
			</NavLink>
		</header>
	);
};

export default Header;
