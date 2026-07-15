import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import GetProduct from '../services/GetProduct'
import { useParams } from 'react-router-dom'
import '../styles/ProductDetails.css'

import { items } from '../Context/createContext'
import { useContext } from 'react'

function ProductDetails() {

  const {cart,setCart,AddtoCart,increse}=useContext(items)

const {id}=useParams()
const [data,setData]=useState(null)

useEffect(()=>{
  Fetching()

},[])

async function Fetching() {

  const items=await GetProduct(id)
  setData(items)
 
  
  
}


if(!data){
    return (
        <div className="loader"></div>
    );
}
  return (
    
    <>
    <Navbar></Navbar>
   
   <div className='productdetails'>
   <div className='product-details' key={data.id}>
   
    <img className='productimage' src={data.image} alt="" />
   <div className='product-info' >
    <h1 >{data.title}</h1>
    <h4>{data.description}</h4>
    <h6> Rating = {data.rating.rate}</h6>
    <p> Price = {data.price}</p>
    <button onClick={()=>AddtoCart(data)}>Add To Cart</button>
</div>

   </div>

   </div>
    
    </>
  )
}

export default ProductDetails