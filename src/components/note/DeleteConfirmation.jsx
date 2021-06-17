import React from "react";
import Button from "../common/Button";
import styled from "styled-components";
import { closeDeleteModal } from "../../actions/ui/modalActions";
import { deleteNote } from "../../actions/data/noteActions";
import { useDispatch } from "react-redux";

const DeleteConfirmationWrapper = styled.div`
	display: grid;
	grid-gap: 1rem;
	padding: 3rem;
	width: 40rem;
	background-color: ${(props) => props.theme.modalFormBg};
`;

const DeleteConfirmationMessage = styled.h1`
	color: ${(props) => props.theme.primaryText};
`;

const DeleteButtonSection = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 2rem;
`;

const DeleteConfirmationTitle = styled.h1`
	font-size: 3rem;
	color: ${(props) => props.theme.yellow};
`;

const DeleteConfirmation = ({ id }) => {
	const dispatch = useDispatch();

	const onDeleteClick = (id) => {
		dispatch(deleteNote(id));
		dispatch(closeDeleteModal());
	};

	return (
		<DeleteConfirmationWrapper>
			<DeleteConfirmationTitle>Confirm Delete</DeleteConfirmationTitle>
			<DeleteConfirmationMessage>
				Are you sure you want to delete this note?
			</DeleteConfirmationMessage>
			<DeleteButtonSection>
				<Button onClick={() => dispatch(closeDeleteModal())}>
					Cancel
				</Button>
				<Button onClick={() => onDeleteClick(id)}>Delete</Button>
			</DeleteButtonSection>
		</DeleteConfirmationWrapper>
	);
};

export default DeleteConfirmation;
