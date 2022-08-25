import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'



const Homepage = () => {
  const  customer_details={
    name:'Shubham',
    address:'Vp Homes, Lko',
    is_login: true

  }
  return (
    <div>
    <Header customer_details={customer_details}/>
    <Main customer_details={customer_details}/>
    </div>
  )
}

export default Homepage