import {
	OPEN_CREATE_MODAL,
	OPEN_DELETE_MODAL,
	OPEN_EDIT_MODAL,
	CLOSE_CREATE_MODAL,
	CLOSE_DELETE_MODAL,
	CLOSE_EDIT_MODAL,
} from "../../actions/ui/modalActions";

const initialState = {
	isCreateOpen: false,
	isEditOpen: false,
	isDeleteOpen: false,
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_CREATE_MODAL:
			return {
				...state,
				isCreateOpen: true,
			};
		case CLOSE_CREATE_MODAL:
			return {
				...state,
				isCreateOpen: false,
			};
		case OPEN_EDIT_MODAL:
			return {
				...state,
				isEditOpen: true,
			};
		case CLOSE_EDIT_MODAL:
			return {
				...state,
				isEditOpen: false,
			};
		case OPEN_DELETE_MODAL:
			return {
				...state,
				isDeleteOpen: true,
			};
		case CLOSE_DELETE_MODAL:
			return {
				...state,
				isDeleteOpen: false,
			};
		default:
			return state;
	}
};

export default modalReducer;
