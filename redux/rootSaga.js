import {all} from 'redux-saga/effects';
import {waitForFetchTaxPayerInfoForD01} from "./incomeTax/incomeTaxSaga";

export default function* rootSaga()
{
    console.log("call at root saga");
    yield all([waitForFetchTaxPayerInfoForD01()]);
}