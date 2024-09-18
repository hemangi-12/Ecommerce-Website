import { getProductsreducer } from "./Productsreducer";
import { getEproductsreducer } from "./Productsreducer";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsreducer,
    geteproductsdata : getEproductsreducer
});

export default rootreducers;