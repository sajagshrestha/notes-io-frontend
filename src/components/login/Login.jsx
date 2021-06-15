import React from "react";
import loginSVG from "../../assets/login.svg";
import { PageWrapper, PageImg } from "../common/PageLayout";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<PageWrapper>
			<PageImg src={loginSVG} alt="hero" />
			<LoginForm />
		</PageWrapper>
	);
};

export default Login;
