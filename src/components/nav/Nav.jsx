import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavWrapper, Logo, NavLinks, UserMenuButton } from "./Nav.styles";
import Button from "../common/Button";
import { useSelector } from "react-redux";
import DropdownMenu from "./DropdownMenu";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const Nav = () => {
	const { isLoggedIn, user } = useSelector((state) => state.user);
	const [isOpen, setOpen] = useState(false);

	return (
		<NavWrapper>
			<Link to="/">
				<Logo src="/logo.png" alt="logo" />
			</Link>
			<NavLinks>
				{isLoggedIn ? (
					<UserMenuButton
						onClick={() => setOpen(!isOpen)}
						variant="outlined"
						disabled={true}
						endIcon={<ExpandMoreOutlinedIcon />}>
						{user.username}
					</UserMenuButton>
				) : (
					<Link to="/login">
						<Button>Login</Button>
					</Link>
				)}
				{isOpen ? (
					<DropdownMenu handleClose={() => setOpen(false)} />
				) : null}
			</NavLinks>
		</NavWrapper>
	);
};

export default Nav;
