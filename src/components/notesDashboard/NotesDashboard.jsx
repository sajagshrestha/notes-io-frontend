import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../../actions/data/noteActions";
import Button from "../common/Button";
import Modal from "../common/Modal/Modal";
import {
	NotesDashboardWrapper,
	NotesCreateSection,
	NotesSection,
} from "./NotesDashboard.styles";
import CreateNoteForm from "./CreateNoteForm";
import { openModal } from "../../actions/ui/modalActions";

export const NotesDashboard = () => {
	const { isLoading, notes, error } = useSelector((state) => state.notes);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserNotes());
	}, []);

	const handleCreateNote = () => {
		dispatch(openModal());
	};

	return (
		<NotesDashboardWrapper>
			<NotesCreateSection>
				<Button onClick={handleCreateNote}>Create new Note</Button>
			</NotesCreateSection>
			<NotesSection>
				{notes.map((note) => (
					<div key={note.id}>{note.title}</div>
				))}
			</NotesSection>
			<Modal>
				<CreateNoteForm />
			</Modal>
		</NotesDashboardWrapper>
	);
};

export default NotesDashboard;
