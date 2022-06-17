import {all} from 'redux-saga/effects';
import {waitForFetchTaxPayerInfoForD01} from "./incomeTax/incomeTaxSaga";
import {waitForFetchMakePayment} from "./makePayment/makePaymentSaga";

export default function* rootSaga()
{
    console.log("call at root saga");
    yield all([waitForFetchTaxPayerInfoForD01(),
        waitForFetchMakePayment()
    ]);
}