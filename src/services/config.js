import { loadFromStorage } from "../utils/localStorage";

export const baseUrl = process.env.REACT_APP_BASE_URL;

export const headerWithoutAuth = () => ({
	"Content-Type": "application/json",
	"Access-Control-Allow-Origin": true,
});

export const headerWithAuth = () => {
	const token = loadFromStorage("user").token;
	if (!token) return {};
	return {
		"Content-Type": "application/json",
		Authorization: `bearer ${token}`,
	};
};
