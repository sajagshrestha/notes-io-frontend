import { Link as RLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RLink)`
	text-decoration: none;
	color: ${(props) => props.theme.yellow};
`;

export default Link;
