import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useFormik } from "formik";
import TextField from "./TextField";
import {
	FormWrapper as GeneralFormWrapper,
	FormTitle,
	Form,
} from "./FormLayout";
import { noteValidationSchema } from "../../validators/noteValidator";
import { useSelector } from "react-redux";
import LabelLoader from "./LabelLoader";

const FormWrapper = styled(GeneralFormWrapper)`
	padding: 3rem;
	width: 40rem;
	background-color: ${(props) => props.theme.modalFormBg};
`;

const ButtonSection = styled.div`
	display: flex;
	flex-direction: row-reverse;
	gap: 2rem;
	justify-content: flex-start;
`;

const NoteForm = ({ initialValues, submit, close, title, buttonLabel }) => {
	const { isSubmitting } = useSelector((state) => state.notes);

	const formik = useFormik({
		initialValues,
		validationSchema: noteValidationSchema,
		onSubmit: (values) => {
			submit(values);
		},
	});

	return (
		<FormWrapper>
			<FormTitle>
				<h1>{title}</h1>
			</FormTitle>
			<Form autoComplete="off" onSubmit={formik.handleSubmit}>
				<TextField
					id="title"
					name="title"
					label="Title"
					variant="outlined"
					fullWidth
					value={formik.values.title}
					onChange={formik.handleChange}
					error={formik.touched.title && Boolean(formik.errors.title)}
					helperText={formik.touched.title && formik.errors.title}
				/>
				<TextField
					id="body"
					label="Body"
					variant="outlined"
					fullWidth
					multiline
					rows={10}
					value={formik.values.body}
					onChange={formik.handleChange}
					error={formik.touched.body && Boolean(formik.errors.body)}
					helperText={formik.touched.body && formik.errors.body}
				/>
				<ButtonSection>
					<Button type="submit" filled={true} disabled={isSubmitting}>
						{isSubmitting ? (
							<LabelLoader dark={true} />
						) : (
							buttonLabel
						)}
					</Button>
					<Button onClick={close}>Cancel</Button>
				</ButtonSection>
			</Form>
		</FormWrapper>
	);
};

export default NoteForm;
