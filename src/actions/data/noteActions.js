import * as noteService from "../../services/noteService";

export const NOTE_REQUESTED = "NOTE_REQUESTED";
export const NOTE_SUCCESS = "NOTE_SUCCESS";
export const NOTE_ERROR = "NOTE_ERROR";
export const SAVE_NOTES = "SAVE_NOTES";
export const SELECT_NOTE = "SELECT_NOTE";

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
			const createdNote = await noteService.addNote(note);
			const prevNotes = getState().notes.notes;
			const newNotes = [createdNote, ...prevNotes];
			dispatch(saveNotes(newNotes));
			dispatch(noteSuccess());
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
		} catch (err) {
			dispatch(noteError());
		}
	};
};
