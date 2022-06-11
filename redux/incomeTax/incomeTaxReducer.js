import { GETTAXPAYERINFOFORD01, SETERROR, SETTAXPAYERINFOFORD01,UPDATETAXPAYERINFOFORD01REGISTER } from "./incomeTaxType"

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
    let obj = {};
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
        case UPDATETAXPAYERINFOFORD01REGISTER:
            const field = action.payload.field;
            const value = action.payload.value;
            console.log("reducer",field);
            console.log(initialState.incomeTaxPayerInfoForD01.field);
            obj[action.payload.field] = action.payload.value;
             return{
                ...state,
                incomeTaxPayerInfoForD01: {
                    ...state.incomeTaxPayerInfoForD01,
                    ...obj
                },
             }
        default:
            return state;
    }
}