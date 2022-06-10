import { GETANNEX ,SETANNEX } from "./annexType"


export const getAnnex=() =>{
    return{
        type: GETANNEX
    }
};


export const setAnnex=(payload)=>{

    return{
        type:SETANNEX,
        payload
    }

}