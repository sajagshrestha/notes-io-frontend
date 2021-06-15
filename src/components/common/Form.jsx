import React from "react";
import { FormWrapper, CustomTextField } from "./Form.styles";

export const Form = (props) => {
	return (
		<FormWrapper>
			<CustomTextField variant="outlined" label="hello" />
		</FormWrapper>
	);
};

export default Form;
