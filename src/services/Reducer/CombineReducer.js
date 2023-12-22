import { combineReducers } from "redux";

import componentData from "./reducer";
const rootRaducer = combineReducers({
    Raducer1: componentData
});

export default rootRaducer;