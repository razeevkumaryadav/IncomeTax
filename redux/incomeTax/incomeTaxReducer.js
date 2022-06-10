import { GETTAXPAYERINFOFORD01, SETERROR, SETTAXPAYERINFOFORD01 } from "./incomeTaxType"

const initialState = {
    incomeTaxPayerInfoForD01: {
        "ADDRESS": "",
        "CONTACTNO":"",
        "EMAIL":"",
        "IRDOFFICECODE": "",
        "OFFNAMENEP": "",
        "PANNO": "",
        "RCAGENCYCODE": "",
        "RCAGENCYID": "",
        "TAXPAYER": "",
    },
    message:"",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SETTAXPAYERINFOFORD01:
            return {
                ...state,
                incomeTaxPayerInfoForD01: action.payload || initialState.incomeTaxPayerInfoForD01,
            };
            break;
        case SETERROR:
            console.log("error at reducer:",action);
            return{
                ...state,
                message:action.payload
            };
            break
        default:
            return state;
    }
}