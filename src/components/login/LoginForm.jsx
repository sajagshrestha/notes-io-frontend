import React from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import {
	initialLoginValues,
	loginValidationSchema,
} from "../../validators/authValidator";
import TextField from "../common/TextField";
import Button from "../common/Button";
import { Form, FormWrapper, FormTitle } from "../common/FormLayout";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/data/authActions";

const LoginForm = () => {
	const dispatch = useDispatch();
	const { isLoading, isLoggedIn, error } = useSelector((state) => state.user);

	const formik = useFormik({
		initialValues: initialLoginValues,
		validationSchema: loginValidationSchema,
		onSubmit: (values) => {
			dispatch(login(values));
		},
	});
	if (isLoggedIn) return <Redirect to="/" />;

	return (
		<FormWrapper>
			<FormTitle>Login</FormTitle>
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
				<Button type="submit">{isLoading ? "loading" : "Login"}</Button>
			</Form>
		</FormWrapper>
	);
};

export default LoginForm;
