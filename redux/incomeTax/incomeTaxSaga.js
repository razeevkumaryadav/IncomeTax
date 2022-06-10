import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';
import { httpGetIncomeTaxPayerInfoForD01 } from '../http/httpIncomeTax';
import {setError, setTaxPayerInforForD01} from '../incomeTax/incomeTaxAction';
import {GETTAXPAYERINFOFORD01} from './incomeTaxType';

function * getTaxPayerInfoForD01(action)
{
    try{
        console.log("call at saga",action.payload);
            const param = action.payload;
            const taxpayerD01 = yield call(httpGetIncomeTaxPayerInfoForD01,param);
            console.log("TAX",taxpayerD01);
            yield put(setTaxPayerInforForD01(taxpayerD01?.data?.data));
            

                      
        
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