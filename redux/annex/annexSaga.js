
import { call, put, takeEvery } from 'redux-saga/effects';
import {httpGetAnnex} from '../http/httpAnnex';
import {setAnnex} from '../annex/annexAction';
import {GETANNEX} from './annexType'


function * getAllAnnex(){
     try {
         const users=yield call(httpGetAnnex);
         console.log('dk user',users.data);
         yield put(setAnnex(users.data));
     } catch (error) {
        console.log('error', error.message);
     }
}



export function * waitForFetchUsers(){
    yield takeEvery(GETANNEX,getAllAnnex);
}

