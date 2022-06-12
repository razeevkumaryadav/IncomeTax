import axios from 'axios';
import {incomeTax,currentDate } from './_config'

console.log("test api");
// debugger;100001826
var token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxLjAiLCJVc2VyTmFtZSI6ImthYmlyIiwibmJmIjoxNjU1MDU1Mjk2LCJleHAiOjE2NTUwNTYxOTYsImlhdCI6MTY1NTA1NTI5Nn0.yiV_-xM8eGFkrNK4a1ztclWQRbv-SbEosMDHrcA6Sfc';
const headerParams = {
    headers: { Authorization: `bearer ${token}` }
};
const param = {"RcAgencyId":"6219" ,"RcAgencyCode":"305047701"};
const panno = {"PAN":"100001826"}
const liablit = {"Pan":"100001826","FiscalYear":"2077.078","TransactionAmt":"100000","ExpenseAmt":"50000"};
export const httpGetIncomeTaxPayerInfoForD01 =(PANNO)=> axios.post(incomeTax+`/Taxpayer/GetD01TaxpayerInfo/`,{"Pan":PANNO});
console.log(httpGetIncomeTaxPayerInfoForD01);
export const httpGetCurrentDate = ()=>axios.get(currentDate);
export const httpGetFiscalYears = () => axios.post(incomeTax+`/FiscalYear/GetD01FiscalYears`,panno,headerParams);
export const httpGetBanks = ()=>axios.post(incomeTax+`/Bank/GetD01Banks`,param,headerParams);
export const httpGetD01SelfLiability =()=>axios.post(incomeTax+`/SelfAssessmentD01/GetD01SelfLiability`,liablit,headerParams);

