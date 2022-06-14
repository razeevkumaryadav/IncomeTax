import axios from 'axios';
import {incomeTax,currentDate } from './_config'

console.log("test api");
// debugger;100001826
var token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxLjAiLCJVc2VyTmFtZSI6ImthYmlyIiwibmJmIjoxNjU1MTk3OTM4LCJleHAiOjE2NTUxOTg4MzgsImlhdCI6MTY1NTE5NzkzOH0.gmC8sVyT4wsffruPg_sgS_XfnaeOXvRw-RZtKcj2-Ao';
const headerParams = {
    headers: { Authorization: `bearer ${token}` }
};
const param = {"RcAgencyId":"6219" ,"RcAgencyCode":"305047701"};
const panno = {"PAN":"100001826"}
const liablit = {"Pan":"100001826","FiscalYear":"2077.078","TransactionAmt":"100000","ExpenseAmt":"50000"};
// const saveLiability ={"Pan":100001826,"Taxpayer":"आशा ट्रेड एण्ड सप्लायर्स","Address":"धनगढी-4,ओमशान्ती नगर","Phone":"9841654564","RcAgencyId":"6219","OffNameNep":"आन्तरिक राजस्व कार्यालय धनगढी","EntryDate":"2079.02.09","BankCode":"11001","SubmissionNo":"","SelfD01TransactionDetails":[{"FiscalYear":"2076.077","TransactionAmt":1,"ExpenseAmt":1,"TaxableIncome":"0.00","TaxLiability":"1875","Charge117":"2000","Interest119":"450","TotalPayableTax":"4325","Amount":"4325","AccountCode":"11111","Pan":100001826,"TaxCatId":"A1-1-7ka","VoucherNo":"","VoucherDate":"","BankCode":"","TranNumber":"","Int119ConcessionAmount":"0","Int119Concession":"0","Int119BeforeConcession":"0","Int119DisCatId":"0","Email":"","RequestCode":""};

const saveLiability ={"Pan":100001826,"Taxpayer":"आशा ट्रेड एण्ड सप्लायर्स","Address":"धनगढी-4,ओमशान्ती नगर","Phone":"9841654564","RcAgencyId":"6219","OffNameNep":"आन्तरिक राजस्व कार्यालय धनगढी","EntryDate":"2079.02.09","BankCode":"11001","SubmissionNo":"","SelfD01TransactionDetails":[{"FiscalYear":"2076.077","TransactionAmt":1,"ExpenseAmt":1,"TaxableIncome":"0.00","TaxLiability":"1875","Charge117":"2000","Interest119":"450","TotalPayableTax":"4325","Amount":"4325","AccountCode":"11111","Pan":100001826,"TaxCatId":"A1-1-7ka","VoucherNo":"","VoucherDate":"","BankCode":"","TranNumber":"","Int119ConcessionAmount":"0","Int119Concession":"0","Int119BeforeConcession":"0","Int119DisCatId":"0","Email":"","RequestCode":""}]};
export const httpGetIncomeTaxPayerInfoForD01 =(PANNO)=> axios.post(incomeTax+`/Taxpayer/GetD01TaxpayerInfo/`,{"Pan":PANNO});
console.log(httpGetIncomeTaxPayerInfoForD01);
export const httpGetCurrentDate = ()=>axios.get(currentDate);
export const httpGetFiscalYears = () => axios.post(incomeTax+`/FiscalYear/GetD01FiscalYears`,panno,headerParams);
export const httpGetBanks = ()=>axios.post(incomeTax+`/Bank/GetD01Banks`,param,headerParams);
export const httpGetD01SelfLiability =(objectparam)=>axios.post(incomeTax+`/SelfAssessmentD01/GetD01SelfLiability`,objectparam,headerParams);
export const httpSaveSelfLiability = ()=>axios.post(incomeTax+`/SelfAssessmentD01/SaveD01Transaction`,saveLiability,headerParams);
