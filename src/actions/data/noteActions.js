import * as noteService from "../../services/noteService";
import { closeModal } from "../ui/modalActions";

export const NOTE_REQUESTED = "NOTE_REQUESTED";
export const NOTE_SUCCESS = "NOTE_SUCCESS";
export const NOTE_ERROR = "NOTE_ERROR";
export const SAVE_NOTES = "SAVE_NOTES";

/**
 * Action creator for loading state for notes api calls.
 *
 * @returns {object}
 */
const noteRequested = () => ({
	type: NOTE_REQUESTED,
});

/**
 * Action creator for loading state for notes api calls.
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
 * Get all user Notes
 *
 * @returns {Function}
 */
export const getUserNotes = () => {
	return async (dispatch) => {
		dispatch(noteRequested());
		try {
			const notes = await noteService.fetchNotes();
			dispatch(noteSuccess());
			dispatch(saveNotes(notes));
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
			const createdNote = await noteService.addNote(note);

			const prevNotes = getState().notes.notes;
			const newNotes = [createdNote, ...prevNotes];
			dispatch(saveNotes(newNotes));
			dispatch(noteSuccess());
			dispatch(closeModal());
		} catch (err) {
			dispatch(noteError());
		}
	};
};
