import {React, useState,useEffect} from 'react'
import "./eproducts.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import { NavLink } from 'react-router-dom';
import eproducts from './eproductdata';




const Eproducts = () => {
    const [items,setitems]=useState([]);
    
    /*const filterResult=(catItem)=>{
        const result=eproducts.filter((curData)=>{
            return curData.category===catItem;
        })
        setitems();

    }*/

   

   useEffect(()=>{
    const getitems= async()=>{
        const res =await fetch('geteproducts');
        const data=await res.json();
        setitems(data);
    };
    getitems();
    },[]);
    console.log(items);

    

   return (
    <div className='productPage'>
        <div className='productTopBanner'>
            <div className='productTopBannerItems'>
                Electronics
            </div>
            <div className='productTopBannerItemsSubMenu'>Mobiles & Accessories </div>
            <div className='productTopBannerItemsSubMenu'>Laptops & Accessories </div>
            <div className='productTopBannerItemsSubMenu'>TV & Home Entertainment </div>
            <div className='productTopBannerItemsSubMenu'>Audio </div>
            <div className='productTopBannerItemsSubMenu'>Cameras </div>
            <div className='productTopBannerItemsSubMenu'>Computers Peripherals</div>
            <div className='productTopBannerItemsSubMenu'>Smart Technology </div>
            <div className='productTopBannerItemsSubMenu'>Musical Instruments </div>
            <div className='productTopBannerItemsSubMenu'>Office & Stationary</div>
        </div>
        
        <div className='productsPageMain'>
            <div className='productsPageMainLeftCategory'>
                <div className='productsPageMainLeftCategoryTitle'>Category</div>
                <div className='productsPageMainLeftCategoryContent'>
                <div className='productsPageMainLeftCategoryTitle'>Computers & Accessories</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Desktops</div>


                <div className='productsPageMainLeftCategoryTitleContent' /*onClick={()=>filterResult('Mobiles')}*/>Mobiles</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Watches</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Laptops</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Tablets</div>
                <div className='productsPageMainLeftCategoryTitleContent'>Earbuds</div>
        

               <div className='productsPageMainLeftCategoryTitle'>Brands</div>  
                <div className='productsPageMainLeftCategoryTitleContent'>Ambrane</div>
                <div className='productsPageMainLeftCategoryTitleContent'>boAt</div>
                <div className='productsPageMainLeftCategoryTitleContent'>JBL</div>

               <div className='productsPageMainLeftCategoryContentSub'>Average Customer Review</div>
               
               <div className='ratingLeftBox'>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarOutlineIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <div className='andUp'>& Up</div>

               </div>
               <div className='ratingLeftBox'>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarOutlineIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarOutlineIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <div className='andUp'>& Up</div>

               </div>
               <div className='ratingLeftBox'>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarOutlineIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarOutlineIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarOutlineIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <div className='andUp'>& Up</div>

               </div>
               <div className='ratingLeftBox'>
                <StarRateIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarOutlineIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarOutlineIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <StarOutlineIcon sx={{fontSize:"20px" ,color:"#febd69"}}/>
                <div className='andUp'>& Up</div>

               </div>
               <div className='productsPageMainLeftCategoryContentSub'>Price</div>
               <div className='productsPageMainLeftCategoryTitleContent'>Under Rs1,000</div>
               <div className='productsPageMainLeftCategoryTitleContent'>Rs1,000-Rs5,000</div>
               <div className='productsPageMainLeftCategoryTitleContent'>Rs5,000-Rs10,000</div>
               <div className='productsPageMainLeftCategoryTitleContent'>Rs10,000-Rs20,000</div>
               <div className='productsPageMainLeftCategoryTitleContent'>Over rs20,000</div>
               




               </div>
            </div>

            <div className='productsPageMainRight'>
                <div className='productsPageMainRightTopBanner'>
                    1-5 of 5 results for <span className='productsPageMainTopBannerSpan'>Macbooks</span>
                </div>


           

                <div className='itemsImageProductPage'>
                    {
                        items.map((item)=>(
                            <div className='itemsImageProductPageOne'key={item.id}>
                            <div className='imageBlockitemsImageProductPageOne'>
                                <img src={item.imageUrl} className='productImageProduct'/>
                            </div>
                            <div className='productNameProduc'>
                                <div>{ item.name}</div>
                                <div className='productNameProductRating'>
                                    <StarRateIcon sx={{fontSize:"16px",color:"#febd69"}}/>
                                    <StarRateIcon sx={{fontSize:"16px",color:"#febd69"}}/>
                                    <StarRateIcon sx={{fontSize:"16px",color:"#febd69"}}/>
                                    <StarRateIcon sx={{fontSize:"16px",color:"#febd69"}}/>
                                    <StarOutlineIcon sx={{fontSize:"16px",color:"#febd69"}}/>
                                </div>
                                <div className="priceProductDetailPage">
                                    <div className='currencyText'>Rs</div>
                                    <div className='rateHomeDetail'>
                                        <div className='rateHomeDetailsPrice'>{item.price}</div>
                                        <button className='addtobasketBtn' >Add To Cart</button>
                                    </div>
                                </div>
                                <div className='offProductPage'>Upto 10% off on select cards</div>
                                <div className='freeDeliveryHomePage'>Free Delivery By Amazon</div>
                            </div>
                        </div>
                           
                        )) }
               
       
                  
               
                          
                                
                                

                       

                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eproducts;