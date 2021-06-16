import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import loginSVG from "../../assets/login.svg";
import { PageWrapper, PageImg } from "../common/PageLayout";
import LoginForm from "./LoginForm";

const Login = () => {
	const { isLoggedIn } = useSelector((state) => state.user);

	if (isLoggedIn) return <Redirect to="/notes" />;
	return (
		<PageWrapper>
			<PageImg src={loginSVG} alt="hero" />
			<LoginForm />
		</PageWrapper>
	);
};

export default Login;
