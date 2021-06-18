import React from "react";
import styled from "styled-components";

const PageNotFoundWrapper = styled.div`
	min-height: 70vh;
	display: grid;
	place-items: center;
	h1 {
		color: ${(props) => props.theme.primaryText};
		font-size: 3rem;
	}
`;

const PageNotFound = () => {
	return (
		<PageNotFoundWrapper>
			<h1>404 Page Not Found.</h1>
		</PageNotFoundWrapper>
	);
};

export default PageNotFound;
