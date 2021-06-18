import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
	initialLoginValues,
	loginValidationSchema,
} from "../../validators/authValidator";
import TextField from "../common/TextField";
import Button from "../common/Button";
import { Form, FormWrapper, FormTitle } from "../common/FormLayout";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/data/authActions";
import { authError } from "../../actions/data/authActions";
import Link from "../common/Link";
import LabelLoader from "../common/LabelLoader";

const LoginForm = () => {
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector((state) => state.user);

	const formik = useFormik({
		initialValues: initialLoginValues,
		validationSchema: loginValidationSchema,
		onSubmit: (values) => {
			dispatch(login(values));
		},
	});

	useEffect(() => {
		return () => {
			//clear error from store after unmount
			dispatch(authError(null));
		};
	}, [dispatch]);

	return (
		<FormWrapper>
			<FormTitle>
				<h1>Login</h1>
				{error && <p>Email or password incorrect</p>}
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
				<Button type="submit" disabled={isLoading}>
					{isLoading ? <LabelLoader /> : "Login"}
				</Button>
				<p>
					Need an account? <Link to="/signup">Signup</Link> instead.
				</p>
			</Form>
		</FormWrapper>
	);
};

export default LoginForm;
