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
				...initialState,
				isLoading: true,
			};

		case "SIGNUP_SUCCESS":
			return {
				...initialState,
				isLoggedIn: true,
				user: action.payload,
			};
		case "SIGNUP_ERROR":
			return {
				...initialState,
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
