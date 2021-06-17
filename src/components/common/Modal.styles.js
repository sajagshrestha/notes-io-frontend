import styled from "styled-components";

export const ModalBackDrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
	background-color: ${(props) => props.theme.backDrop};
	z-index: 10;
`;
export const ModalContent = styled.div`
	z-index: 20;
	box-shadow: 4px 10px 30px rgba(0, 0, 0, 0.5);
`;
