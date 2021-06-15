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
`;

export const UserMenuButton = styled(Button)`
	.MuiButton-label {
		font-size: 1.2rem;
	}
	&&.MuiButton-outlined {
		border-radius: 0;
		border: 3px solid;
		border-color: ${(props) => props.theme.yellow};
	}
`;
