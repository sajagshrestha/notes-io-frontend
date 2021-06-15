import React from "react";
import signupSVG from "../../assets/signup.svg";
import { SignupWrapper, SignupImg } from "./Signup.styles";
import SignupForm from "./SignupForm";

const Signup = () => {
	return (
		<SignupWrapper>
			<div>
				<SignupImg src={signupSVG} alt="hero" />
			</div>
			<div>
				<SignupForm />
			</div>
		</SignupWrapper>
	);
};

export default Signup;
