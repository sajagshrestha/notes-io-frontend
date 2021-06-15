import React from "react";
import { Link } from "react-router-dom";
import { NavWrapper, Logo, NavLinks } from "./Nav.styles";
import Button from "../common/Button";

const Nav = () => {
	return (
		<NavWrapper>
			<Link to="/">
				<Logo src="/logo.png" alt="logo" />
			</Link>
			<NavLinks>
				<Button>Login</Button>
			</NavLinks>
		</NavWrapper>
	);
};

export default Nav;
