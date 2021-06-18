import React from "react";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import NotesDashboard from "./components/notesDashboard/NotesDashboard";
import Signup from "./components/signup/Signup";
import Note from "./components/note/Note";
import Login from "./components/login/Login";
import { Switch, Route } from "react-router-dom";
import { AppWrapper, MainWrapper } from "./App.styles";
import PrivateRoute from "./components/common/PrivateRoute";
import PageNotFound from "./components/pageNotFound/pageNotFound";

export const App = () => {
	return (
		<AppWrapper>
			<MainWrapper>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/notes">
						<NotesDashboard />
					</PrivateRoute>
					<PrivateRoute path="/note/:id">
						<Note />
					</PrivateRoute>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</MainWrapper>
		</AppWrapper>
	);
};

export default App;
