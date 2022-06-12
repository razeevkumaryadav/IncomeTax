import { GETTAXPAYERINFOFORD01, SETERROR, SETTAXPAYERINFOFORD01,UPDATETAXPAYERINFOFORD01REGISTER,
GETCURRENTDATE,
GETFISCALYEARS,
SETFISCALYEARS,
GETBANKS,
SETBANKS,
GETD01SELFLIABILITY,
} from "./incomeTaxType"

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
    date:"",
    fiscalYears:[{}],
    banks:[{}],
    liability:[
        {
			"taxCatId": "",
			"pan": "",
			"fiscalYear": "",
			"incomeAmount": "",
			"expenseAmount": "",
			"taxLiabilityBeforConc": "",
			"concessionAmount": "",
			"concession": "",
			"disCatId": "",
			"taxLiability": "",
			"charge117": "",
			"interest119": "",
			"int119ConcessionAmount": null,
			"int119Concession": null,
			"int119BeforeConcession": null,
			"int119DisCatId": null,
			"totalPayableTax": ""
		}
    ],
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
            break;
        case UPDATETAXPAYERINFOFORD01REGISTER:
          
            obj[action.payload.field] = action.payload.value;
             return{
                ...state,
                incomeTaxPayerInfoForD01: {
                    ...state.incomeTaxPayerInfoForD01,
                    ...obj
                },
             };
             break;
        case GETCURRENTDATE:
            console.log("saga date",action.payload);
            return{
                ...state,
                date:action.payload.date
            };
            break;
         case GETFISCALYEARS:
            return{
                ...state,
                fiscalYears:action.payload
            };
            break;
        case GETBANKS:
            console.log("saga bank",action.payload)
            return{
                ...state,
                banks:action.payload
            };
            break;
        case GETD01SELFLIABILITY:
            return{
                ...state,
                liability:action.payload
            };
            break;
        default:
            return state;
    }
}