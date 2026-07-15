import React from 'react'
import paymentImg from '../images/payment.jpg'
import '../styles/pay.css'
import { useNavigate } from 'react-router-dom'
function Payment() {
    const Navigate = useNavigate()
  return (
   <>
   
  <div class="payment-container">
    
    <img src={paymentImg} alt="QR Scanner"/>
   
    <button className='back-cart-btn' onClick={()=>Navigate('/cart')}> Back to cart</button>
    
    
</div>
   
   
   
   
   </>
  )
}

export default Payment