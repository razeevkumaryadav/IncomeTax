import { combineReducers } from "redux";
import incomeTaxReducer from './incomeTax/incomeTaxReducer';
import  makePaymentReducer from'./makePayment/makePaymentReducer';
const rootReducer = combineReducers({
    taxPayerInfoForD01 :incomeTaxReducer,
    makePayment:makePaymentReducer,
});

export default rootReducer;