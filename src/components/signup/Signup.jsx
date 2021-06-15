import React from "react";
import signupSVG from "../../assets/signup.svg";
import { PageWrapper, PageImg } from "../common/PageLayout";
import SignupForm from "./SignupForm";

const Signup = () => {
	return (
		<PageWrapper>
			<PageImg src={signupSVG} alt="hero" />
			<SignupForm />
		</PageWrapper>
	);
};

export default Signup;
