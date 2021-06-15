export const baseUrl = "http://localhost:5000/api";

export const authHeader = () => {
	const token = localStorage.getItem("user").t;
};

export const headerWithoutAuth = {
	"Content-Type": "application/json",
};
