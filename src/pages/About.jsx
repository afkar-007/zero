import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/About.css'
import { useNavigate } from 'react-router-dom'


function About() {
  const Navigate = useNavigate()
  return (
    <>
    <Navbar></Navbar>
    <div>

      
     <div class="about">
    <div class="about-container">
        <h1>Welcome to ZERO </h1>



        <h2>At ZERO, we believe shopping should be simple, secure, and enjoyable. We offer a carefully selected collection of high-quality products at affordable prices, ensuring every customer gets the best value.</h2>
        <p>...</p>

        <h2>What We Do</h2>
        <ul>
            <li>Premium Quality Products</li>
            <li>Fast Delivery</li>
            <li>Secure Payments</li>
            <li>24/7 Customer Support</li>
        </ul>

        <h2>Our mission is to provide a seamless online shopping experience by combining quality products, modern technology, and excellent customer service.</h2>
        <p>...</p>

        <h2>Thank You

Thank you for choosing ZERO. We're excited to be part of your shopping journey and look forward to serving you.</h2>
        <p>...</p>
        <button className='logout-btn'>Log Out</button>
    </div>
</div>





    </div>
    
    
    
    </>
  )
}

export default About