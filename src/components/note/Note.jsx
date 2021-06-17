import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNoteById } from "../../actions/data/noteActions";
import { NoteBody, NoteTitle, NoteWrapper } from "./Note.styles";
import Button from "../common/Button";
import Modal from "../common/Modal";
import { closeEditModal, openEditModal } from "../../actions/ui/modalActions";
import EditNoteForm from "./EditNoteForm";

const Note = () => {
	const { id } = useParams();
	const { selectedNote } = useSelector((state) => state.notes);
	const { isEditOpen, isDeleteOpen } = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNoteById(id));
	}, []);

	if (!selectedNote) return <div>error</div>;
	return (
		<NoteWrapper>
			<NoteTitle>{selectedNote.title}</NoteTitle>
			<NoteBody>{selectedNote.body}</NoteBody>
			<div>
				<Button onClick={() => dispatch(openEditModal())}>Edit</Button>
				<Button>Delete</Button>
			</div>
			<Modal isOpen={isEditOpen} close={() => dispatch(closeEditModal())}>
				<EditNoteForm note={selectedNote} />
			</Modal>
		</NoteWrapper>
	);
};

export default Note;
