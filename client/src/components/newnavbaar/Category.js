import {React,useContext} from 'react'
import {LoginContext} from "../context/ContextProvider";
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import "./category.css"


const Category = ({logclose}) => {
  

    const { account, setAccount } = useContext(LoginContext);

  return (
  <>
  <div className='rightheader'>
  <div className='right_nav'>
        {
            account ?  <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>:
            <Avatar className="avtar"></Avatar>
        }
        {account ? <h3>Hello,{account.fname.toUpperCase()}</h3>:""}
        </div>

    <div className='nav_btn'onClick={()=> logclose()}>
  <NavLink><div className='productsPageMainLeftCategoryTitle'>Trending</div></NavLink>
                     <div className='productsPageMainLeftCategoryTitleContent'>Best Seller</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Kubra,Nova,Pestige & More</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Deals Of The Day</div>

                <Divider style={{borderbottom:"1px solid",width:"100%",padding:"0",margin:"5px 0" }}/>
          
                
  
  <NavLink><div className='productsPageMainLeftCategoryTitle'>Category</div></NavLink>
                <div className='productsPageMainLeftCategoryTitleContent'>Laptops</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Sandwich Maker</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Smart Watches</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Electric Kettle</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Hair Dryer</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Earbuds</div>

                <Divider style={{borderbottom:"1px solid",width:"100%",padding:"0",margin:"5px 0" }}/>

  <NavLink><div className='productsPageMainLeftCategoryTitle'>Brands</div></NavLink>
  <div className='productsPageMainLeftCategoryTitleContent'>HP</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Kubra</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Noise</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Pestige</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Nova</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Boats</div>

                <Divider style={{borderbottom:"1px solid",width:"100%",padding:"0",margin:"5px 0" }}/>

  <NavLink >
    <div className='productsPageMainLeftCategoryTitle'>Price</div></NavLink>
               <div className='productsPageMainLeftCategoryTitleContent'>Under Rs1,000</div>
               <div className='productsPageMainLeftCategoryTitleContent'>Rs1,000-Rs5,000</div>
               <div className='productsPageMainLeftCategoryTitleContent'>Rs5,000-Rs10,000</div>

             
             
  
               </div>
               </div>
  </>
  )
}

export default Category