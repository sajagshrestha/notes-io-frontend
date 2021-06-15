import React from "react";
import TextField from "../common/TextField";
import Button from "../common/Button";
import { useFormik } from "formik";
import {
	initalSignupValues,
	signupValidationSchema,
} from "../../validators/authValidator";

const SignupForm = () => {
	const formik = useFormik({
		initialValues: initalSignupValues,
		validationSchema: signupValidationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<TextField
				id="email"
				name="email"
				value={formik.values.email}
				onChange={formik.handleChange}
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
				label="Email"
				variant="outlined"
				fullWidth
			/>
			<TextField
				id="username"
				name="username"
				value={formik.values.username}
				onChange={formik.handleChange}
				error={
					formik.touched.username && Boolean(formik.errors.username)
				}
				helperText={formik.touched.username && formik.errors.username}
				label="Username"
				variant="outlined"
				fullWidth
			/>
			<TextField
				id="password"
				name="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				error={
					formik.touched.password && Boolean(formik.errors.password)
				}
				helperText={formik.touched.password && formik.errors.password}
				label="Password"
				variant="outlined"
				type="password"
				fullWidth
			/>
			<TextField
				id="passwordConfirmation"
				name="passwordConfirmation"
				value={formik.values.passwordConfirmation}
				onChange={formik.handleChange}
				error={
					formik.touched.passwordConfirmation &&
					Boolean(formik.errors.passwordConfirmation)
				}
				helperText={
					formik.touched.passwordConfirmation &&
					formik.errors.passwordConfirmation
				}
				label="Password"
				variant="outlined"
				type="password"
				fullWidth
			/>

			<Button type="submit">Signup</Button>
		</form>
	);
};

export default SignupForm;
