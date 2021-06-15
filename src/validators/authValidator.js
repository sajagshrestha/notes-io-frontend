import * as yup from "yup";

export const initalSignupValues = {
	email: "",
	username: "",
	password: "",
	passwordConfirmation: "",
};

export const initialLoginValues = {};

export const signupValidationSchema = yup.object({
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	username: yup
		.string("Enter your username")
		.min(4, "Username should be of minimum 8 characters length")
		.max(20, "Username should be of maximum 20 characters length")
		.required("Username is required"),
	password: yup
		.string("Enter your password")
		.min(8, "Password should be of minimum 8 characters length")
		.max(20, "Password should be of maximum 20 characters length")
		.required("Password is required"),
	passwordConfirmation: yup
		.string()
		.required("Re-enter Password is required")
		.oneOf([yup.ref("password"), null], "Passwords must match"),
});
