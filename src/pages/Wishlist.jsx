import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { datas } from '../Context/CreateWishlist'
import '../styles/Wishlist.css'
import { useNavigate } from 'react-router-dom'

function Wishlist() {
  const {things,Remove}=useContext(datas)

  const navigating =useNavigate()


  if(!things){
    return(<></>)
  }

  return (

    <>
    <Navbar></Navbar>
    

    <div className='wishlist-container'>
    {

    things.map((sends=>


      <div className='wishlist-card' key={sends.id} >
        <img onClick={()=>navigating(`/ProductDetails/${sends.id}`)} src={sends.image} alt="" />
        <h1>{sends.title}</h1>
        <p>price = {sends.price}</p>
        <button onClick={()=>Remove(sends.id)}>Remove</button>


      </div>



    ))


    }

</div>



    
    </>
  )
}

export default Wishlist