import { loadFromStorage } from "../../utils/localStorage";

const user = loadFromStorage("user");

const initialState = {
	isLoggedIn: user ? user.isLoggedIn : false,
	user: user ? user.userInfo : null,
	isLoading: false,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SIGNUP_REQUESTED":
			return {
				...state,
				isLoading: true,
			};

		case "SIGNUP_SUCCESS":
			return {
				...state,
				isLoggedIn: true,
				user: action.payload,
				error: null,
			};
		case "SIGNUP_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case "LOGOUT":
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
