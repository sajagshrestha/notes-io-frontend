import { loadFromStorage } from "../utils/localStorage";

export const baseUrl = "http://localhost:5000/api";

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
