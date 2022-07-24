import { combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "./Auth/reducer";
import { CCreducer } from "./SelectCityAndCountry/reducer";
import { DTreducer } from "./SelectDateAndTimeR/reducer";

export const rootReducer = combineReducers({
  CCreducer: CCreducer,
  AuthReducer: AuthReducer,
  DTreducer: DTreducer,
});

export const store = legacy_createStore(rootReducer);
