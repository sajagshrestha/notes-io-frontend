import React, { useEffect } from "react";
import TextField from "../common/TextField";
import Button from "../common/Button";
import { Form, FormWrapper, FormTitle } from "../common/FormLayout";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
	initalSignupValues,
	signupValidationSchema,
} from "../../validators/authValidator";
import { signup } from "../../actions/data/authActions";
import { authError } from "../../actions/data/authActions";

const SignupForm = () => {
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector((state) => state.user);

	const formik = useFormik({
		initialValues: initalSignupValues,
		validationSchema: signupValidationSchema,
		onSubmit: (values, actions) => {
			dispatch(signup(values));
		},
	});

	useEffect(() => {
		return () => {
			//clear error from store after unmount
			dispatch(authError(null));
		};
	}, []);

	return (
		<FormWrapper>
			<FormTitle>
				<h1>Signup</h1>
				{error && <p>Email Already in Use</p>}
			</FormTitle>
			<Form autoComplete="off" onSubmit={formik.handleSubmit}>
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
						formik.touched.username &&
						Boolean(formik.errors.username)
					}
					helperText={
						formik.touched.username && formik.errors.username
					}
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
						formik.touched.password &&
						Boolean(formik.errors.password)
					}
					helperText={
						formik.touched.password && formik.errors.password
					}
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
					label="Re-enter Password"
					variant="outlined"
					type="password"
					fullWidth
				/>

				<Button type="submit" disabled={isLoading}>
					{isLoading ? "loading" : "Signup"}
				</Button>
			</Form>
		</FormWrapper>
	);
};

export default SignupForm;
