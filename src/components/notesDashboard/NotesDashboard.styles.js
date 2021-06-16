import styled from "styled-components";

export const NotesDashboardWrapper = styled.div`
	display: grid;
	grid-gap: 3rem;
`;

export const NotesCreateSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NotesSection = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	justify-content: space-between;
	grid-gap: 4rem;
`;
