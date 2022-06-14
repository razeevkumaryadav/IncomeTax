import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';
import { httpGetIncomeTaxPayerInfoForD01,httpGetCurrentDate,httpGetFiscalYears,httpGetBanks,
    httpGetD01SelfLiability,
    httpSaveSelfLiability,
    
 } from '../http/httpIncomeTax';
import {setError, setTaxPayerInforForD01,getCurrentDate, getFiscalYear,
getBanks,setBanks,getD01SelfLiability,setD01SelfLiability,
} from '../incomeTax/incomeTaxAction';
import {GETTAXPAYERINFOFORD01,SAVED01SELFLIABILITY,GETD01SELFLIABILITY } from './incomeTaxType';

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
            console.log("fiscal years at saga:",fiscalyear);

            const banks = yield call(httpGetBanks);
            yield put(getBanks(banks.data.data));
            console.log("banks -1",banks);  
            
            // const liability = yield call(httpGetD01SelfLiability);
            // yield put(getD01SelfLiability(liability.data.data));
            // console.log('liability at saga:',liability);
        
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

function * postSaveD01SelfLiability(action)
{
    try{
        const submissionno = yield call(httpSaveSelfLiability,action.payload);
        toast.warning(submissionno?.data?.data?.SubmissionNo);
        console.log("save liability");
        console.log(submissionno);
    }catch(error)
    {
        alert(error);
        toast.error(error.response.data.message);
    }
}

function * getD01SelfLiabilities(action)
{
    try{
        console.log("saga selfliabilty",action.payload);
        const liability = yield call(httpGetD01SelfLiability,action.payload);
        yield put(setD01SelfLiability(liability.data.data));

    }catch(error)
    {

    }
}

export function * waitForFetchTaxPayerInfoForD01()
{
    yield takeEvery(GETTAXPAYERINFOFORD01,getTaxPayerInfoForD01);
    yield takeEvery(SAVED01SELFLIABILITY,postSaveD01SelfLiability);
    yield takeEvery(GETD01SELFLIABILITY,getD01SelfLiabilities)
}