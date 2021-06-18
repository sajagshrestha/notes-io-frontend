import React from "react";
import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";

const LoaderWrapper = styled.div``;

const LabelLoader = ({ dark }) => {
	return (
		<LoaderWrapper>
			<BeatLoader
				color={dark ? "#222222" : "#F8D966"}
				loading={true}></BeatLoader>
		</LoaderWrapper>
	);
};

export default LabelLoader;
