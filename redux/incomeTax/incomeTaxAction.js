import {GETTAXPAYERINFOFORD01,SETTAXPAYERINFOFORD01, 
        GETTAXPAYERINFOFORD01REGISTER,
        SETTAXPAYERINFOFORD01REGISTER,
        UPDATETAXPAYERINFOFORD01REGISTER,
        SETERROR,
        GETERROR,
        SETCURRENTDATE,
        
        } 
from "./incomeTaxType"


export const getTaxPayerInfoForD01=(PANNO) =>{
        console.log("income tax action get method");
    return{
        
        type: GETTAXPAYERINFOFORD01,
         payload:PANNO
    }
};


export const setTaxPayerInforForD01=(payload)=>{
        console.log("income tax action set method",payload)
    return{
        type:SETTAXPAYERINFOFORD01,
        payload
    }

};
export const getTaxPayerInfoForD01Register=(payload)=>
{
    return{
        type:GETTAXPAYERINFOFORD01REGISTER,
        payload
    }
};
export const setTaxPayerInfoForD01Register=(payload)=>
{
    return{
        type:GETTAXPAYERINFOFORD01REGISTER,
        payload
    }
}

export const updateTaxPayerInforForD01Register = (keyValue)=>
{
    console.log("action",keyValue);
    return {
        type:UPDATETAXPAYERINFOFORD01REGISTER,
        payload:keyValue
    }
}

export const getCurrentDate =(payload)=>
{
    return {
        type:GETCURRENTDATE,
        payload
    }
}

export const setError=(payload)=>
{
    console.log("error at set action :",payload);
    return{
        type:SETERROR,
        payload
    }
}
export const getError=(payload)=>
{
   
    return{
        type:GETERROR,
        payload
    }
}

