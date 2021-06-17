import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes, selectNote } from "../../actions/data/noteActions";
import Button from "../common/Button";
import Modal from "../common/Modal";
import {
	NotesDashboardWrapper,
	NotesCreateSection,
	NotesSection,
} from "./NotesDashboard.styles";
import CreateNoteForm from "./CreateNoteForm";
import {
	closeCreateModal,
	openCreateModal,
} from "../../actions/ui/modalActions";
import NotePreview from "./NotePreview";
import { useHistory } from "react-router";

export const NotesDashboard = () => {
	const history = useHistory();

	const { notes } = useSelector((state) => state.notes);
	const { isCreateOpen } = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNotes());
		dispatch(selectNote(null));
	}, []);

	const openCreateForm = () => dispatch(openCreateModal());

	const closeCreateForm = () => dispatch(closeCreateModal());

	const redirectToNote = (id) => {
		history.push(`/note/${id}`);
	};

	return (
		<NotesDashboardWrapper>
			<NotesCreateSection>
				<Button onClick={openCreateForm}>Create a Note</Button>
			</NotesCreateSection>

			<NotesSection>
				{notes.map((note) => (
					<NotePreview
						handleClick={() => redirectToNote(note.id)}
						title={note.title}
						key={note.id}
					/>
				))}
			</NotesSection>

			<Modal isOpen={isCreateOpen} close={closeCreateForm}>
				<CreateNoteForm />
			</Modal>
		</NotesDashboardWrapper>
	);
};

export default NotesDashboard;
