import styled from "styled-components";
export const NoteWrapper = styled.div`
	display: grid;
	grid-gap: 2rem;
`;

export const NoteTitle = styled.h1`
	font-size: 4rem;
	font-weight: 700;
	color: ${(props) => props.theme.primaryText};
	text-transform: capitalize;
`;

export const NoteBody = styled.p`
	font-size: 1.5rem;

	color: ${(props) => props.theme.primaryText};
`;
