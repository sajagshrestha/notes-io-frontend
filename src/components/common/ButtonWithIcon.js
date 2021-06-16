import { Button } from "@material-ui/core";

const ButtonWithIcon = styled(Button)`
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
export default ButtonWithIcon;
