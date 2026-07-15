import React, { useEffect, useState } from 'react'
import Fetchproduct from '../services/ProductFetch';
import '../styles/ProductCard.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { datas } from '../Context/CreateWishlist';

function ProductCard() {
    const {things,setThings,AddtoWish}=useContext(datas)
const navigate =useNavigate()

    const[product,setProduct] = useState([])
    const[search,setSearch]= useState("")

    const filtering_Product=product.filter((sends)=>sends.title.toLowerCase().includes(search.toLowerCase()))


    useEffect(()=>{
Fetching()
    },[things])




    async function Fetching() {
       
        const data = await Fetchproduct()
        setProduct(data)  
       console.log(things);
       
       
           
    }

  if (!filtering_Product) {
    return (
        <div className="loader"></div>
    );
}
    
   

  return (
    <>
    <input type="text" placeholder='search' className='search-box'  onChange={(e)=>setSearch(e.target.value)}/>

<div>

    <div className='products-container'>

        {filtering_Product.map((sends)=>
        <div className='product-card' key={sends.id}>
            <img src={sends.image} loading="lazy" alt="" onClick={()=>navigate(`/ProductDetails/${sends.id}`)} />
            <h1>{sends.title}</h1>
        
        
        <button onClick={()=>AddtoWish(sends)} >Add to wishlist</button>
</div>
        )}


       



    </div>
    
    </div>
    </>
  )
}

export default ProductCard