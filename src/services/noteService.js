import axios from "axios";
import { baseUrl, headerWithAuth } from "./config";

/**
 * Api call to fetch all notes
 *
 * @param {Object} userCredentials
 * @returns {Promise}
 */
export const getNotes = async () => {
	return axios
		.get(`${baseUrl}/note`, {
			headers: headerWithAuth(),
		})
		.then((res) => {
			return res.data;
		});
};

/**
 * Api call to fetch note by id
 *
 * @param {Object} userCredentials
 * @returns {Promise}
 */
export const getNoteByID = async (id) => {
	return axios
		.get(`${baseUrl}/note/${id}`, {
			headers: headerWithAuth(),
		})
		.then((res) => {
			return res.data;
		});
};

/**
 * Api call to add a note
 *
 * @param {Object} note
 * @returns {Promise}
 */
export const addNote = async (note) => {
	return axios
		.post(`${baseUrl}/note`, note, {
			headers: headerWithAuth(),
		})
		.then((res) => {
			return res.data;
		});
};

/**
 * Api call to update a note
 *
 * @param {Object} note
 * @param {Object} id
 * @returns {Promise}
 */
export const updateNote = async (note, id) => {
	return axios
		.put(`${baseUrl}/note/${id}`, note, {
			headers: headerWithAuth(),
		})
		.then((res) => {
			return res.data;
		});
};
