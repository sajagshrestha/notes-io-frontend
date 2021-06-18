import React from "react";
import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";

const LoaderWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
	padding-right: 10px;
`;

const FullPageLoader = () => {
	return (
		<LoaderWrapper>
			<HashLoader color="#F8D966" loading={true}></HashLoader>
		</LoaderWrapper>
	);
};

export default FullPageLoader;
