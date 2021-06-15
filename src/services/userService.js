import axios from "axios";
import { saveToStorage, removeFromStorage } from "../utils/localStorage";
import { baseUrl, headerWithoutAuth } from "./config";

export const signupUser = async (userCredentials) => {
	return axios
		.post(`${baseUrl}/auth/signup`, userCredentials, {
			headers: headerWithoutAuth,
		})
		.then((res) => {
			const user = res.data.user;
			saveToStorage("user", { isLoggedIn: true, user });
			return user;
		});
};

export const loginUser = async (userCredentials) => {
	return axios
		.post(`${baseUrl}/auth/login`, userCredentials, {
			headers: headerWithoutAuth,
		})
		.then((res) => {
			const user = res.data.user;
			saveToStorage("user", { isLoggedIn: true, user });
			return user;
		});
};

export const logoutUser = () => {
	removeFromStorage("user");
};
