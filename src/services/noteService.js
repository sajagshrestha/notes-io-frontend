import axios from "axios";
import { baseUrl, headerWithAuth } from "./config";

/**
 * Api call to fetch all notes
 *
 * @param {Object} userCredentials
 * @returns {Promise}
 */
export const fetchNotes = async () => {
	return axios
		.get(`${baseUrl}/note`, {
			headers: headerWithAuth(),
		})
		.then((res) => {
			return res.data;
		});
};

/**
 * Api call to add a note
 *
 * @param {Object} userCredentials
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
