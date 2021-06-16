import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useFormik } from "formik";
import TextField from "../common/TextField";
import { FormWrapper, FormTitle, Form } from "../common/FormLayout";
import {
	initialNoteValues,
	noteValidationSchema,
} from "../../validators/noteValidator";
import { useDispatch } from "react-redux";
import { createNote } from "../../actions/data/noteActions";
import { closeModal } from "../../actions/ui/modalActions";

const CreateFormWrapper = styled(FormWrapper)`
	padding: 3rem;
	width: 40rem;
	background-color: ${(props) => props.theme.modalFormBg};
`;

const ButtonSection = styled.div`
	display: flex;
	gap: 2rem;
	justify-content: flex-end;
`;

const CreateNoteForm = (props) => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: initialNoteValues,
		validationSchema: noteValidationSchema,
		onSubmit: (values) => {
			dispatch(createNote(values));
		},
	});

	const handleCancelClick = () => {
		dispatch(closeModal());
	};

	return (
		<CreateFormWrapper>
			<FormTitle>Create a Note</FormTitle>
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
					<Button onClick={handleCancelClick}>Cancel</Button>
					<Button type="submit">Create</Button>
				</ButtonSection>
			</Form>
		</CreateFormWrapper>
	);
};

export default CreateNoteForm;
