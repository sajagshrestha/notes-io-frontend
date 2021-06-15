import styled from "styled-components";
import { TextField as MuiTextField } from "@material-ui/core";

const TextField = styled(MuiTextField)`
	.MuiOutlinedInput-root {
		& fieldset {
			border-color: white;
		}
		&:hover fieldset {
			border-color: white;
		}
		&.Mui-focused fieldset {
			border-color: white;
		}
	}
	& label {
		color: white;
		&.Mui-focused {
			color: white;
		}
	}
	.MuiInputBase-input {
		color: white;
	}
`;

export default TextField;
