import * as noteService from "../../services/noteService";
import { closeAllModal } from "../ui/modalActions";

export const NOTE_REQUESTED = "NOTE_REQUESTED";
export const NOTE_SUCCESS = "NOTE_SUCCESS";
export const NOTE_ERROR = "NOTE_ERROR";
export const SAVE_NOTES = "SAVE_NOTES";
export const SELECT_NOTE = "SELECT_NOTE";
export const NOTE_SUBMIT_REQUESTED = "NOTE_SUBMIT_REQUESTED";
export const NOTE_SUBMIT_SUCCESS = "NOTE_SUBMIT_SUCCESS";

/**
 * Action creator for loading state for notes api calls.
 *
 * @returns {object}
 */
const noteRequested = () => ({
	type: NOTE_REQUESTED,
});

/**
 * Action creator for success state for notes api calls.
 *
 * @returns {object}
 */
const noteSuccess = () => ({
	type: NOTE_SUCCESS,
});

/**
 * Action creator for error state for notes api call
 *
 * @param {object} err
 * @returns {object}
 */
const noteError = (err) => ({
	type: NOTE_ERROR,
});

/**
 * Action creator for submitting state for notes api calls.
 *
 * @returns {object}
 */
const noteSubmitRequested = () => ({
	type: NOTE_SUBMIT_REQUESTED,
});

/**
 * Action creator for submitting state for notes api calls.
 *
 * @returns {object}
 */
const noteSubmitSuccess = () => ({
	type: NOTE_SUBMIT_SUCCESS,
});

/**
 * Action creator saving notes to store
 *
 * @param {Array} notes
 * @returns {object}
 */
const saveNotes = (notes) => ({
	type: SAVE_NOTES,
	payload: notes,
});

/**
 * Action to select a note
 *
 * @param {Object} note
 * @returns {object}
 */
export const selectNote = (note) => ({
	type: SELECT_NOTE,
	payload: note,
});

/**
 * Fetch all user Notes
 *
 * @returns {Function}
 */
export const fetchNotes = () => {
	return async (dispatch) => {
		dispatch(noteRequested());
		try {
			const notes = await noteService.getNotes();
			dispatch(noteSuccess());
			dispatch(saveNotes(notes));
		} catch (err) {
			dispatch(noteError());
		}
	};
};

/**
 * Fetch single note by id
 *
 * @param {String} id
 * @returns {Function}
 */
export const fetchNoteById = (id) => {
	return async (dispatch) => {
		dispatch(noteRequested());
		try {
			const note = await noteService.getNoteByID(id);
			dispatch(noteSuccess());
			dispatch(selectNote(note));
		} catch (err) {
			dispatch(noteError());
		}
	};
};

/**
 * Create a note
 *
 * @param {Object} note
 * @returns {Function}
 */
export const createNote = (note) => {
	return async (dispatch, getState) => {
		try {
			dispatch(noteSubmitRequested());
			const createdNote = await noteService.addNote(note);
			const prevNotes = getState().notes.notes;
			const newNotes = [createdNote, ...prevNotes];
			dispatch(saveNotes(newNotes));
			dispatch(noteSubmitSuccess());
			dispatch(closeAllModal());
		} catch (err) {
			dispatch(noteError());
		}
	};
};

/**
 * Edit a note
 *
 * @param {Object} note
 * @param {String} id
 * @returns {Function}
 */
export const editNote = (note, id) => {
	return async (dispatch, getState) => {
		try {
			dispatch(noteSubmitRequested());
			const updatedNote = await noteService.updateNote(note, id);
			dispatch(selectNote(updatedNote));
			const prevNotes = getState().notes.notes;
			const newNotes = prevNotes.map((note) => {
				if (note.id === updatedNote.id) {
					note = updatedNote;
				}
				return note;
			});
			dispatch(saveNotes(newNotes));
			dispatch(noteSubmitSuccess());
			dispatch(closeAllModal());
		} catch (err) {
			dispatch(noteError());
		}
	};
};

/**
 * Delete a note
 *
 * @param {String} id
 * @returns {Function}
 */
export const deleteNote = (id) => {
	return async (dispatch, getState) => {
		try {
			dispatch(noteSubmitRequested());
			await noteService.deleteNote(id);
			const prevNotes = getState().notes.notes;
			const newNotes = prevNotes.filter((note) => {
				if (note.id === id) return false;
				return true;
			});
			dispatch(saveNotes(newNotes));
			dispatch(selectNote(null));
			dispatch(noteSubmitSuccess());
			dispatch(closeAllModal());
		} catch (err) {
			dispatch(noteError());
		}
	};
};
