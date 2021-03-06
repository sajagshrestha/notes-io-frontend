import * as yup from "yup";

export const noteValidationSchema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().max(255).required(),
});
