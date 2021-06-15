import styled from "styled-components";

export const AppWrapper = styled.div`
	min-height: 100vh;
	background-color: ${(props) => props.theme.primaryBackground};
`;

export const MainWrapper = styled.div`
	width: min(80%, 1250px);
	margin: 0 auto;
`;
