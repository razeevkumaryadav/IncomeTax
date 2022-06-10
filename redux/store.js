import {legacy_createStore as createStore,applyMiddleware,compose} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'   
// import{configureStore} from "reduxjs/toolkit";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";

const SagaMiddleware = createSagaMiddleware();
const store =composeWithDevTools(applyMiddleware(SagaMiddleware)) 
     (createStore)(rootReducer);
SagaMiddleware.run(rootSaga);

export default store;