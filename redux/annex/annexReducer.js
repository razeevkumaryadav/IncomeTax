import { GETANNEX ,SETANNEX } from "./annexType"

const initialState = {
  annex:[]
}

export default (state = initialState,action) => {
  switch (action.type) {
   case SETANNEX:
    return { ...state,
       annex:action.payload  
    }

  default:
    return state
  }
}
