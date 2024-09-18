const products = [];
const eproducts=[];

export const getProductsreducer = (state = {products},action)=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            return {products:action.payload}
        case "FAIL_GET_PRODUCTS":
            return {products:action.payload}
        default : return state
    }
}

export const getEproductsreducer = (state = {eproducts},action)=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            return {eproducts:action.payload}
        case "FAIL_GET_PRODUCTS":
            return {eproducts:action.payload}
        default : return state
    }
}