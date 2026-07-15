import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'


function Home() {
  




  return (
    <>
<Navbar></Navbar>
<div className='BodyDiv'>

<Hero></Hero>

<ProductCard></ProductCard>


   
    
   
</div>
</>
  )
}

export default Home