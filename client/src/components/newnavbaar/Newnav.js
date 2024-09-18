import {React,useContext,useState} from 'react'
import "./newnav.css";
import {LoginContext} from "../context/ContextProvider";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Category from './Category';

const Newnav = () => {

  const { account, setAccount } = useContext(LoginContext);
  const [dropen,setDropen]=useState(false);

  const handleopen=()=>{
    setDropen(true)
}
const handledrclose=()=>{
  setDropen(false)
}

  return (
    <div className='new_nav'>
        <div className='nav_data'>
            <div className='left_data'>
            <IconButton className='hamburgur' onClick={handleopen}>
            
            <MenuIcon  style={{color:"#fff"}}/>
          </IconButton>
          <Drawer open={dropen} onClose={handledrclose}>
           <Category logclose={handledrclose}/>
          </Drawer>
          
          <NavLink><p>All</p></NavLink>
            <NavLink><p>Mobile</p></NavLink>
            <NavLink><p>Bestseller</p></NavLink>
            <NavLink> <p>Fashion</p></NavLink>
            <NavLink> <p>Customer Services</p></NavLink>
            <NavLink to={`/eproducts`}> 
            <p>Electronics</p></NavLink>
            <NavLink><p>Prime</p></NavLink>
            <NavLink> <p>Todays's deal</p></NavLink>
            <NavLink><p>Amazon Pay</p></NavLink>
            </div>
            <div className="right_data">
                <img src="./nav.jpg" alt="navdata" />
            </div>
        </div>
    </div>
  )
}

export default Newnav