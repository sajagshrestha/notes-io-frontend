import styled from "styled-components";

export const FormWrapper = styled.div`
	padding: 2rem 0 2rem 2rem;
`;

export const FormTitle = styled.h1`
	text-align: center;
	margin-bottom: 1.5rem;
	color: ${(props) => props.theme.yellow};
`;

export const Form = styled.form`
	display: grid;
	grid-gap: 1.3rem;
`;
