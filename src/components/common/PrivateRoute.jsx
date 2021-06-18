import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
	const { isLoggedIn } = useSelector((state) => state.user);
	return (
		<Route
			{...rest}
			// render={() => {
			// 	return isLoggedIn === true ? (
			// 		children
			// 	) : (
			// 		<Redirect to="/login" />
			// 	);
			// }}
		>
			{isLoggedIn ? children : <Redirect to="/login" />}
		</Route>
	);
};

export default PrivateRoute;
