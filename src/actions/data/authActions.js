import * as userService from "../../services/userService";

export const AUTH_REQUESTED = "AUTH_REQUESTED";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGOUT = "LOGOUT";

/**
 * Action creator for loading state during auth.
 *
 * @returns {object}
 */
const authRequested = () => ({
	type: AUTH_REQUESTED,
});

/**
 * Action creator saving user after auth.
 *
 * @param {object} user
 * @returns {object}
 */
const authSuccess = (user) => ({
	type: AUTH_SUCCESS,
	payload: user,
});

/**
 * Action creator for managing auth error.
 *
 * @param {object} err
 * @returns {object}
 */
export const authError = (err) => ({
	type: AUTH_ERROR,
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
		dispatch(authRequested());
		try {
			const user = await userService.signupUser(userCredentials);
			dispatch(authSuccess(user));
		} catch (err) {
			dispatch(authError(err));
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
		dispatch(authRequested());
		try {
			const user = await userService.loginUser(userCredentials);
			dispatch(authSuccess(user));
		} catch (err) {
			dispatch(authError(err));
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
		dispatch({ type: LOGOUT });
	};
};
