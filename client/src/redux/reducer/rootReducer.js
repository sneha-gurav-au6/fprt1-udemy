//root-reducer

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import courceRecuer from "./courceReducer";

const rootReducer = combineReducers({
    user: userReducer,
    cource: courceRecuer,
});

export default rootReducer;
