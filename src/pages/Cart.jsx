import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { items } from '../Context/createContext'
import '../styles/Cart.css'
import { useNavigate } from 'react-router-dom'





function Cart() {
   const Navigate=useNavigate()


  const{cart,increase,Decrease,Remove}=useContext(items)
  const[things,setThings]=useState([])
  


 

  if(!cart){
      return (
        <div className="loader"></div>
    );
  }


  const Reducer = cart.reduce((sum,item)=>{ return sum+item.price*item.Quantity},0)


  return (

    <>
    <Navbar></Navbar>
    <div className='cart-page'>

      

    <h1 class="cart-title">Shopping Cart</h1>

<div class="grand-total">
    <h2>
        Grand Total
       
    </h2>
 <span className='grand-totalspan'>₹{Reducer.toFixed(2)}</span>
    <button onClick={()=>Navigate('/Payment')} class="checkout-btn">
        Proceed to Checkout
    </button>
</div>
    
    {
      cart.map(sends=>

      
<div className='cart-container' key={sends.id}>

<div  className='cart-card'>

<img src={sends.image} onClick={()=>Navigate(`/ProductDetails/${sends.id}`)}  alt="" />
<h1 className='cart-detailsh2' onClick={()=>Navigate(`/ProductDetails/${sends.id}`)} >{sends.title}</h1>
<p className='cart-detailsp'> price = {sends.Quantity*sends.price.toFixed()}</p>
<p>Quantity = {sends.Quantity}</p>
<button onClick={()=>increase(sends)} className='quantitybutton'>+</button>
<button  onClick={()=>Decrease(sends)} className='quantitybutton'>-</button>
<button className='remove-btn' onClick={()=>Remove(sends.id)}>Remove</button>




</div>

</div>


      )


    }
   
</div>
    </>
  )
}

export default Cart