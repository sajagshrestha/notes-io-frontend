import React from "react";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import NotesDashboard from "./components/notesDashboard/NotesDashboard";
import Signup from "./components/signup/Signup";
import { Switch, Route } from "react-router-dom";
import { AppWrapper, MainWrapper } from "./App.styles";

export const App = () => {
	return (
		<AppWrapper>
			<MainWrapper>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					{/* <Route path="/notes">
						<NotesDashboard />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route> */}
				</Switch>
			</MainWrapper>
		</AppWrapper>
	);
};

export default App;
