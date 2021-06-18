import React from "react";
import Button from "../common/Button";
import styled from "styled-components";
import { closeDeleteModal } from "../../actions/ui/modalActions";
import { deleteNote } from "../../actions/data/noteActions";
import { useDispatch, useSelector } from "react-redux";
import LabelLoader from "../common/LabelLoader";

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
	font-size: 2.2rem;
	color: ${(props) => props.theme.yellow};
`;

const DeleteConfirmation = ({ id }) => {
	const dispatch = useDispatch();
	const { isSubmitting } = useSelector((state) => state.notes);
	const onDeleteClick = (id) => {
		dispatch(deleteNote(id));
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
				<Button
					onClick={() => onDeleteClick(id)}
					disabled={isSubmitting}
					filled={true}>
					{isSubmitting ? <LabelLoader dark={true} /> : "Delete"}
				</Button>
			</DeleteButtonSection>
		</DeleteConfirmationWrapper>
	);
};

export default DeleteConfirmation;
