import themeReducer from "./ui/themeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	theme: themeReducer,
});

export default rootReducer;
