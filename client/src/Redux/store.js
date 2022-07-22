import { combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "./Auth/reducer";
import { CCreducer } from "./selectCC/reducer";

export const rootReducer = combineReducers({CCreducer : CCreducer, AuthReducer : AuthReducer})

export const store = legacy_createStore(rootReducer);
