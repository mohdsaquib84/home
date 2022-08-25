import { makeStyles} from '@mui/styles'
import React from 'react'
import { Box } from '@mui/material'
import {Container} from '@mui/material'
import {Paper} from '@mui/material'
import {Button} from '@mui/material'
import product from '../assets/api/Api'



 const style = makeStyles((theme)=>({
    maindiv:{
        marginTop:theme.spacing(18)
    },
    box:{
    //    border:'1px solid red',
    
    },
    container:{
        // border:'1px solid red',
        height:'500px',
        width:'90vw',
        
    },
    paperdiv:{
        // border:'1px solid green'
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap'
        

    },
    paper:{
        // border:'1px solid red',
        // height:'350px',
        width:'300px',
        marginTop:theme.spacing(5),
        marginLeft:theme.spacing(2)

    },
    image:{
        // border:'1px solid black',
        height:'250px'
    },
    info:{
        // border:'1px solid blue',
        // height:'50px',
        display:'flex',
        justifyContent:'space-around',

    },
    product:{
        fontSize:'larger'
    },
    offer:{
        display:'flex',
        justifyContent:'center',
        color:'blue'
    },
    buttons:{
        // border:'1px solid red',
        display:'flex',
        justifyContent:'space-around',
        paddingTop:'10px',
        marginBottom:theme.spacing(1)
        
    },
    stock:{
        display:'flex',
        justifyContent:'center',
        fontSize:'larger',
        color:'red'
    }   
 
 }))

const Main = ({customer_details}) => {
    const {is_login}= customer_details
    const design =style()
  return (
    <div className={design.maindiv}>
      <Box className={design.box}>
          <Container className={design.container}>
            {is_login?(
                <div className={design.paperdiv}>
                 {product.map((element)=>{return(
                 <Paper elevation={20} className={design.paper}>
                    <div className ={design.image}>
                       <img src={element.image} alt={product.brand} height={'250px'} width={'100%'}/>
                    </div>
                    <div className={design.info}>
                        <div className={design.product}>
                           <strong>
                              {element.brand}
                           </strong>
                        </div>
                        <div>
                           <strong>
                             Rs. {element.price}
                           </strong>
                        </div>
                    </div>
                    <div className={design.offer}>
                       {element.offer}
                    </div>
                    {(element.Is_stock)?(
                        <div className={design.buttons}>
                        <Button variant='contained' size='small'>Add</Button>
                        <Button variant='contained' size='small'>Remove</Button>
                    </div>
                    ):(
                        <div className={design.stock}>
                             Out Of Stock
                        </div>
                    )}
                  
                 </Paper>
                 )})}
              </div>  
            ):<div>Please Login/Register First to serve this service.</div>}


              
              
              
          </Container>
      </Box>
    
    </div>
  )
}

export default Main