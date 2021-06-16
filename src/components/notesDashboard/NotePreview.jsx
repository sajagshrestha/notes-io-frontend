import React from "react";
import styled from "styled-components";

const NotePreviewWrapper = styled.div`
	width: 20rem;
	height: 20rem;
	padding: 2rem;
	background-color: ${(props) => props.theme.yellow};
	box-shadow: ${(props) => props.theme.boxShadow};
	cursor: pointer;
	transition: all 0.4s ease;
	&:hover {
		transform: scale(1.05);
	}
`;

const NoteTitle = styled.h1`
	color: ${(props) => props.theme.secondaryText};
`;

const NotePreview = ({ title }) => {
	return (
		<NotePreviewWrapper>
			<NoteTitle>{title}</NoteTitle>
		</NotePreviewWrapper>
	);
};

export default NotePreview;
