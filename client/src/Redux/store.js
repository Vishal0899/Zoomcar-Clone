import { combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "./Auth/reducer";
import { CCreducer } from "./SelectCityAndCountryR/reducer";
import { DTreducer } from "./SelectDateAndTimeR/reducer";
import { Lreducer } from "./SelectLocationR/reducer";

export const rootReducer = combineReducers({
  CCreducer: CCreducer,
  Lreducer: Lreducer,
  AuthReducer: AuthReducer,
  DTreducer: DTreducer,
});

export const store = legacy_createStore(rootReducer);
