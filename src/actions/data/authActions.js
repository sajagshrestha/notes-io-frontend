import * as userService from "../../services/userService";

const SIGNUP_REQUESTED = "SIGNUP_REQUESTED";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_ERROR = "SIGNUP_ERROR";

/**
 * Action creator for loading state during signup.
 *
 * @returns {object}
 */
const signupRequested = () => ({
	type: SIGNUP_REQUESTED,
});

/**
 * Action creator saving user after signup.
 *
 * @param {object} user
 * @returns {object}
 */
const signupSuccess = (user) => ({
	type: SIGNUP_SUCCESS,
	payload: user,
});

/**
 * Action creator for managing signup error.
 *
 * @param {object} user
 * @returns {object}
 */
const signupError = (err) => ({
	type: SIGNUP_ERROR,
	payload: err,
});

/**
 * Sign up async action creator.
 *
 * @param {object} userCredentials
 * @returns {Function}
 */
export const signup = (userCredentials) => {
	return async (dispatch) => {
		dispatch(signupRequested());
		try {
			const user = await userService.signupUser(userCredentials);
			dispatch(signupSuccess(user));
		} catch (err) {
			dispatch(signupError(err));
		}
	};
};

/**
 * Login async action creator.
 *
 * @param {object} userCredentials
 * @returns {Function}
 */
export const login = (userCredentials) => {
	return async (dispatch) => {
		dispatch(signupRequested());
		try {
			const user = await userService.loginUser(userCredentials);
			dispatch(signupSuccess(user));
		} catch (err) {
			dispatch(signupError(err));
		}
	};
};

/**
 * Log out Action creator
 *
 * @returns {Function}
 */
export const logout = () => {
	return (dispatch) => {
		userService.logoutUser();
		dispatch({ type: "LOGOUT" });
	};
};
