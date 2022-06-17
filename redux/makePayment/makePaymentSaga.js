import { 
    WITHHOLDER_LOGIN,GET_ERRORS,MAKEPAYMNET_UPDATE,RESET_WITHHOLDERLOGIN,GET_SUB_DATA,LOG_OUT,
        GETMAKEPAYMENT,SETMAKEPAYMENT
    } from "./makePaymentType";

    import { toast } from 'react-toastify';
    import { call, put, takeEvery } from 'redux-saga/effects';
    import { httpGetIncomeTaxPayerInfoForD01,httpGetCurrentDate,httpGetFiscalYears,httpGetBanks,
        httpGetD01SelfLiability,
        httpSaveSelfLiability,
        httpGetMakePayment,
        
     } from '../http/httpIncomeTax';
import { setMakePayment } from "./makePaymentAction";
  

    function * getMakePaymentOffice(action)
    {
        try{
            console.log("before payment rajaswa sirsak genertor")
            const makePayment = yield call(httpGetMakePayment);
            console.log("make payment saga",makePayment.data.ResponseData);
            yield put(setMakePayment(makePayment.data.ResponseData))
            

        }catch(error)
        {
            console.log(error);
        }

    }
export function * waitForFetchMakePayment()
{
    console.log("reached to payment watcher");
    yield takeEvery(GETMAKEPAYMENT,getMakePaymentOffice);
}