import React from 'react'
import { AppBar, Badge} from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import {InputBase} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const styles =makeStyles((theme)=>({
   toolbar:{
    display:'flex',
    backgroundColor:'black',
    justifyContent:'space-between'

   },
   base:{
    backgroundColor:'white',
    border:'2px solid gray',
    borderRadius:'10px',
    textAlign:'center',
    width:'20vw',
    minWidth:'180px',
    color:'red'
   },
   returns:{
    [theme.breakpoints.down(738)]:{
      display:'none',

    }
   },
   
   acc:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }

   },
   add:{
    display:'flex',

    [theme.breakpoints.down(640)]:
    {
      display:'none',
      
    }
   },
   toolbar2:{
    MarginTop:theme.spacing(2),
    backgroundColor:'gray',
    display:'flex',
    textAlign:'center',
    justifyContent:'space-between' 
   },
   book:{
    [theme.breakpoints.down(600)]:
    {
      display:'none'
    }
  },
  service:{
    [theme.breakpoints.down(505)]:
    {
      display:'none'
    }
  },
  deals:{
    [theme.breakpoints.down(402)]:
    {
      display:'none'
    }
  },
  all:{
    display:'flex',
    justifyContent:'center'
  },
  locationIcon:{
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-end'
  }



}))


const Header = ({customer_details}) => {
  const {name,address,is_login} =  customer_details;
  const design =styles()
  return (
    <div>
    <AppBar>
       <Toolbar className={design.toolbar}>
          <div>
              <Typography variant='h5'>Laptop</Typography>
          </div>
          <div className={design.add}>
              <div className={design.locationIcon}>
                <LocationOnIcon/>
              </div>
              <div>
                <small>Hello</small><br />
                <strong>{is_login?address:'Select Your Address'}</strong>
              </div>
          </div>
          <div>
            <InputBase  placeholder='Search Here' className={design.base}/>
          </div>
          <div className={design.acc}>
            <div>Hello,{is_login?name:'sign in'}</div>
            <div>
            <strong>Account & Lists</strong>
            </div>
          </div> 
          <div className={design.returns}>
            <div>Returns</div>
            <div>
              <strong>& Orders</strong>
            </div>
          </div> 
          <div className={design.cart}>
            <Badge invisible={is_login?false:true} badgeContent={10} color="primary">
              <ShoppingCartIcon/>
            </Badge>
          </div>
       </Toolbar>

       <Toolbar className={design.toolbar2}>
           <div className={design.all}>
              <MenuIcon/>
              <div>ALL</div>
           </div>
           <div>
             Best Sellers
           </div>
           <div>
            Laptops
           </div>
           <div className={design.deals}>
              Today's Deals
           </div>
           <div className={design.service}>
             customer Service 
           </div>
            <div className={design.book}>
             Books
            </div>
       </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header