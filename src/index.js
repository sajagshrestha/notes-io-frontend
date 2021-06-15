import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

reactDom.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</Provider>,

	document.getElementById("root")
);
