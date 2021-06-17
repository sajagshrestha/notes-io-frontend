import {
	NOTE_REQUESTED,
	NOTE_ERROR,
	SAVE_NOTES,
	NOTE_SUCCESS,
	SELECT_NOTE,
} from "../../actions/data/noteActions";

const initialState = {
	isLoading: false,
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
		case NOTE_ERROR:
			return {
				...state,
				isLoading: false,
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
