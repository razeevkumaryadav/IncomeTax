import { combineReducers } from "redux";
import incomeTaxReducer from './incomeTax/incomeTaxReducer';
const rootReducer = combineReducers({
    taxPayerInfoForD01 :incomeTaxReducer
});

export default rootReducer;