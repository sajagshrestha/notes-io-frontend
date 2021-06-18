import {
	NOTE_REQUESTED,
	NOTE_ERROR,
	SAVE_NOTES,
	NOTE_SUCCESS,
	SELECT_NOTE,
	NOTE_SUBMIT_REQUESTED,
	NOTE_SUBMIT_SUCCESS,
} from "../../actions/data/noteActions";

const initialState = {
	isLoading: false,
	isSubmitting: false,
	error: null,
	notes: [],
	selectedNote: null,
};

const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case NOTE_REQUESTED:
			return {
				...state,
				isLoading: true,
			};
		case NOTE_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case NOTE_SUBMIT_REQUESTED:
			return {
				...state,
				isSubmitting: true,
			};
		case NOTE_SUBMIT_SUCCESS:
			return {
				...state,
				isSubmitting: false,
			};
		case NOTE_ERROR:
			return {
				...state,
				isLoading: false,
				isSubmitting: false,
				error: action.payload,
			};
		case SAVE_NOTES:
			return {
				...state,
				notes: action.payload,
			};
		case SELECT_NOTE:
			return {
				...state,
				selectedNote: action.payload,
			};
		default:
			return state;
	}
};

export default noteReducer;
