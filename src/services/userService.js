import axios from "axios";
import { saveToStorage, removeFromStorage } from "../utils/localStorage";
import { baseUrl, headerWithoutAuth } from "./config";

/**
 * Api call to signup user
 *
 * @param {Object} userCredentials
 * @returns {Promise}
 */
export const signupUser = async (userCredentials) => {
	return axios
		.post(`${baseUrl}/auth/signup`, userCredentials, {
			headers: headerWithoutAuth,
		})
		.then((res) => {
			const token = res.data.accessToken;
			const user = res.data.user;
			saveToStorage("user", { isLoggedIn: true, userInfo: user, token });
			return user;
		});
};

/**
 * Api call to login user
 *
 * @param {Object} userCredentials
 * @returns {Promise}
 */
export const loginUser = async (userCredentials) => {
	return axios
		.post(`${baseUrl}/auth/login`, userCredentials, {
			headers: headerWithoutAuth(),
		})
		.then((res) => {
			const token = res.data.accessToken;
			const user = res.data.user;
			saveToStorage("user", { isLoggedIn: true, userInfo: user, token });
			return user;
		});
};

/**
 * Logs user out by clearing jwt
 *
 */
export const logoutUser = () => {
	removeFromStorage("user");
};
