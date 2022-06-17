import { 
    WITHHOLDER_LOGIN,GET_ERRORS,MAKEPAYMNET_UPDATE,RESET_WITHHOLDERLOGIN,GET_SUB_DATA,LOG_OUT,GETMAKEPAYMENT,SETMAKEPAYMENT
    } from "./makePaymentType";
    

      export const updatemakePaymentform = (keyValue) => dispatch => {
        dispatch({
          type: MAKEPAYMNET_UPDATE,
          payload: keyValue
        })
      }
      export const  clrstore =()=>(dispatch)=>{
        dispatch({
          type: LOG_OUT
        }) 
      }
   
      export const ResetWithholderlogin = () => (dispatch) => {
        dispatch({
          type: RESET_WITHHOLDERLOGIN
        }) 
      }   
export const saveWithholderlogin = (keyValue) => (dispatch) => {

  dispatch({        
    type: GET_SUB_DATA,
    payload: keyValue
  })  
};
  
export const getMakePayment=(payload)=>
{
  console.log("call at action payment");
  return{
        type:GETMAKEPAYMENT,
        payload
    }

 };

 export const setMakePayment=(payload)=>
 {
  console.log("set payment call",payload);
  return{
    type:SETMAKEPAYMENT,
    payload
  }
 }