import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';
import { httpGetIncomeTaxPayerInfoForD01,httpGetCurrentDate,httpGetFiscalYears,httpGetBanks,httpGetD01SelfLiability } from '../http/httpIncomeTax';
import {setError, setTaxPayerInforForD01,getCurrentDate, getFiscalYear,
getBanks,setBanks,getD01SelfLiability,setD01SelfLiability,
} from '../incomeTax/incomeTaxAction';
import {GETTAXPAYERINFOFORD01} from './incomeTaxType';

function * getTaxPayerInfoForD01(action)
{
    try{
        console.log("call at saga",action.payload);
            const param = action.payload;
            const taxpayerD01 = yield call(httpGetIncomeTaxPayerInfoForD01,param);
                   
            console.log("TAX",taxpayerD01);
            yield put(setTaxPayerInforForD01(taxpayerD01?.data?.data));
            
            const currentdate = yield call(httpGetCurrentDate);
            console.log("date",currentdate.data.data.date);
            yield put(getCurrentDate(currentdate.data.data));

            const fiscalyear = yield call(httpGetFiscalYears);
            yield put(getFiscalYear(fiscalyear.data.data))
            console.log("fiscal years:",fiscalyear);

            const banks = yield call(httpGetBanks);
            yield put(getBanks(banks.data.data));
            console.log("banks -1",banks);  
            
            const liability = yield call(httpGetD01SelfLiability);
            yield put(getD01SelfLiability(liability.data.data));
            console.log('liability at saga:',liability);
        
        console.log("income tax saga after call",taxpayerD01);
       
    } catch(error)
    {
        console.log("1");
        console.log(error.response.data.message);
        // return toast.error(error);
         toast.error(error.response.data.message);
        yield put(setTaxPayerInforForD01(null));
        // yield put(setError(error.response.data.message))
        
        // showMessage(error.response?.data?.message || 'Could not load data!');
        console.log('error',error);
    }
}

// function *GETTAXPAYERINFOFORD01REGISTER(action)
// {
//     try{
//         yield
//     }catch(error)
//     {
//         console.log('error',error);
//     }
// }

export function * waitForFetchTaxPayerInfoForD01()
{
    yield takeEvery(GETTAXPAYERINFOFORD01,getTaxPayerInfoForD01);
}