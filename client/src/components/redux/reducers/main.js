import { getProductsreducer } from "./Productsreducer";
import { getEproductsreducer } from "./Productsreducer";
import userReducer from "./userReducer"

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    USER:userReducer,
    getproductsdata : getProductsreducer,
    geteproductsdata : getEproductsreducer,

});

export default rootreducers;