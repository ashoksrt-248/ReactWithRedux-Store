 
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {createStore, applyMiddleware} from 'redux';
import reducer from "./reducer";

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;