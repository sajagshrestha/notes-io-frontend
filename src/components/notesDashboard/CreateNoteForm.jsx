import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../actions/data/noteActions";
import { closeCreateModal } from "../../actions/ui/modalActions";
import NoteForm from "../common/NoteForm";

const CreateNoteForm = () => {
	const dispatch = useDispatch();

	const onCreateSubmit = (values) => dispatch(createNote(values));

	const onClose = () => dispatch(closeCreateModal());

	const initialValues = {
		title: "",
		body: "",
	};

	return (
		<NoteForm
			title="Create new note"
			initialValues={initialValues}
			submit={onCreateSubmit}
			close={onClose}
			buttonLabel="Create"
		/>
	);
};

export default CreateNoteForm;
