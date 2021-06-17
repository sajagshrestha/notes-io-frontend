import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetchNoteById } from "../../actions/data/noteActions";
import { NoteBody, NoteTitle, NoteWrapper, ButtonSection } from "./Note.styles";
import Button from "../common/Button";
import Modal from "../common/Modal";
import {
	closeDeleteModal,
	closeEditModal,
	openDeleteModal,
	openEditModal,
} from "../../actions/ui/modalActions";
import EditNoteForm from "./EditNoteForm";
import DeleteConfirmation from "./DeleteConfirmation";

const Note = () => {
	const { id } = useParams();
	const { selectedNote, error } = useSelector((state) => state.notes);
	const { isEditOpen, isDeleteOpen } = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNoteById(id));
	}, [dispatch, id]);

	if (!selectedNote) return <Redirect to="/notes" />;
	return (
		<NoteWrapper>
			<NoteTitle>{selectedNote.title}</NoteTitle>
			<NoteBody>{selectedNote.body}</NoteBody>
			<ButtonSection>
				<Button onClick={() => dispatch(openEditModal())}>Edit</Button>
				<Button onClick={() => dispatch(openDeleteModal())}>
					Delete
				</Button>
			</ButtonSection>
			<Modal isOpen={isEditOpen} close={() => dispatch(closeEditModal())}>
				<EditNoteForm note={selectedNote} />
			</Modal>
			<Modal
				isOpen={isDeleteOpen}
				close={() => dispatch(closeDeleteModal())}>
				<DeleteConfirmation id={selectedNote.id} />
			</Modal>
		</NoteWrapper>
	);
};

export default Note;
