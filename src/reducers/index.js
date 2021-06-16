import { combineReducers } from "redux";
import authReducer from "./data/authReducer";
import noteReducer from "./data/noteReducer";
import modalReducer from "./ui/ModalReducer";

const rootReducer = combineReducers({
	user: authReducer,
	notes: noteReducer,
	modal: modalReducer,
});

export default rootReducer;
