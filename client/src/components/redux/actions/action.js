export const getProducts = ()=> async(dispatch)=>{
    try {
        const data = await fetch("/getproducts",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
        });

        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}
//eproducts action
export const getEproducts = ()=> async(dispatch)=>{
    try {
        const data = await fetch("/geteproducts",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
        });

        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}
// loginAction.js
export const login = (userData) => ({
    type: "LOGIN_SUCCESS",
    payload: userData
  });
  