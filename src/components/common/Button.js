import styled from "styled-components";

const Button = styled.button`
	padding: 0.4em 2em;
	color: ${(props) =>
		props.filled ? props.theme.secondaryText : props.theme.yellow};
	background-color: ${(props) =>
		props.filled ? props.theme.yellow : "transparent"};
	border: 4px solid;
	border-color: ${(props) => props.theme.yellow};
	font-size: ${(props) => (props.size === "xl" ? "2.1rem" : "1.3rem")};
	cursor: pointer;
	transition: all 0.2s ease-out;
	font-family: ${(props) => props.theme.fontFamily};
	font-weight: 700;
	box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.3);
	&:hover {
		color: ${(props) => props.theme.secondaryText};
		background-color: ${(props) => props.theme.yellow};
	}
`;

export default Button;
