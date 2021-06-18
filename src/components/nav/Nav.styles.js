import styled from "styled-components";
import { Button } from "@material-ui/core";

export const NavWrapper = styled.div`
	height: min(8rem, 12vh);
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2rem;
`;

export const Logo = styled.img`
	height: 3rem;
	width: 10.5rem;
`;
export const NavLinks = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 4rem;
	font-size: 1.4rem;
`;

export const UserMenuButton = styled(Button)`
	.MuiButton-label {
		font-size: 1.2rem;
		color: ${(props) => props.theme.yellow};
	}
	&&.MuiIcon-root {
		color: ${(props) => props.theme.yellow};
	}
	&&.MuiButton-outlined {
		border-radius: 0;
		border: 3px solid;
		border-color: ${(props) => props.theme.yellow};
	}
`;
