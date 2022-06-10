import axios from 'axios';
import {incomeTax } from './_config'

console.log("test api");
// debugger;100001826
export const httpGetIncomeTaxPayerInfoForD01 =(PANNO)=> axios.post(incomeTax+`/Taxpayer/GetD01TaxpayerInfo/`,{"Pan":PANNO});
console.log(httpGetIncomeTaxPayerInfoForD01);


