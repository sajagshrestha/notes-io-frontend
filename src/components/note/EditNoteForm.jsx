import React from "react";
import { useDispatch } from "react-redux";
import { editNote } from "../../actions/data/noteActions";
import { closeEditModal } from "../../actions/ui/modalActions";
import NoteForm from "../common/NoteForm";

const EditNoteForm = ({ note }) => {
	const dispatch = useDispatch();

	const onEditSubmit = (values) => dispatch(editNote(values, note.id));
	const onClose = () => dispatch(closeEditModal());

	const initialValues = {
		title: note.title,
		body: note.body,
	};

	return (
		<NoteForm
			title="Edit your Note"
			initialValues={initialValues}
			submit={onEditSubmit}
			close={onClose}
			buttonLabel="Edit"
		/>
	);
};

export default EditNoteForm;
