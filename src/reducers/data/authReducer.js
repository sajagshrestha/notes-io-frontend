import { loadFromStorage } from "../../utils/localStorage";
import {
	AUTH_REQUESTED,
	AUTH_SUCCESS,
	AUTH_ERROR,
	LOGOUT,
} from "../../actions/data/authActions";

const user = loadFromStorage("user");

const initialState = {
	isLoggedIn: user ? user.isLoggedIn : false,
	user: user ? user.userInfo : null,
	isLoading: false,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_REQUESTED:
			return {
				...state,
				isLoading: true,
			};

		case AUTH_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				isLoading: false,
				user: action.payload,
				error: null,
			};
		case AUTH_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			};
		default:
			return state;
	}
};

export default authReducer;
