import {
    WITHHOLDER_LOGIGN, MAKEPAYMNET_UPDATE, RESET_WITHHOLDERLOGIN, GET_SUB_DATA,
    GETMAKEPAYMENT,
    SETMAKEPAYMENT,
} from './makePaymentType';


var initialState = {
    makePayment: {

        USERNAME: '',
        PASSWORD: '',
        WH_PAN: ''
    },
    submissions: [],
    logindata: {},
    isNewMode: true,

    rajswsirsak:[{"ACCOUNT_CODE":"","ACCOUNT_DESC_NEPALI":"","ACCOUNT_DESC_ENGLISH":"","ACCT_TYPE":""}],
}

const makePaymentReducer = (state = initialState, action) => {
    let updatewithholder = Object.assign({}, state);

    switch (action.type) {

        // case UPDATE_SUBMISSION:
        //     let objS = {};
        //     objS[action.payload.field] = action.payload.value;
        //     let unit = Object.assign({}, state.unit, obj);
        //     return Object.assign({}, state, { 
        //         unit: unit,
        //         disabled:false
        //     }) 

        case RESET_WITHHOLDERLOGIN:
            return Object.assign({}, state, {
                withholder: Object.assign({}, state.withholder, {
                    USERNAME: '',
                    PASSWORD: '',
                    WH_PAN: ''
                }),
                isNewMode: true,
            })

        case MAKEPAYMNET_UPDATE:
            let obj = {};
            obj[action.payload.field] = action.payload.value;
            let makePayment = Object.assign({}, state.makePayment, obj);
            return Object.assign({}, state, {
                makePayment: makePayment,
                disabled: false
            })

        case GET_SUB_DATA:
            console.log('sub data reducer', action.payload.data.ResponseData)
            return Object.assign({}, state, {
                lsubdata: action.payload.data.ResponseData
                // submissions: {}
            })
        case GETMAKEPAYMENT:
            return{
                // ...state,
                // rajswsirsak:[action.payload]
            };
            break;
        case SETMAKEPAYMENT:
            console.log("payment at set at reducer ",action.payload);
            return{
                ...state,
                rajswsirsak:action.payload

            }
        

        default:
            return updatewithholder;
    }
}

export default makePaymentReducer;

