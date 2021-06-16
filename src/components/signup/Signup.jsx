import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import signupSVG from "../../assets/signup.svg";
import { PageWrapper, PageImg } from "../common/PageLayout";
import SignupForm from "./SignupForm";

const Signup = () => {
	const { isLoggedIn } = useSelector((state) => state.user);

	if (isLoggedIn) return <Redirect to="/notes" />;
	return (
		<PageWrapper>
			<PageImg src={signupSVG} alt="hero" />
			<SignupForm />
		</PageWrapper>
	);
};

export default Signup;
