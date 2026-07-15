import React from 'react'
import { Link } from 'react-router-dom'
import xero from '../images/xero.png'
import '../styles/Navbar.css'
import { useContext } from 'react'
import { items } from '../Context/createContext'
import { datas } from '../Context/CreateWishlist'


function Navbar() {

  const {cart} =useContext(items)
  const {things}=useContext(datas)
  return (
   <>

   <div className='navbar'>
    
   <img  className='logoimg'   src={xero}           alt="" />
   <Link className='nav-links' to={'/home'}>     Home     </Link>
   <Link className='nav-links' to={'/cart'}>     Cart ({cart.length})   </Link>
   <Link className='nav-links' to={'/wishlist'}> Wishlist ({things.length}) </Link>
   <Link className='nav-links' to={'/about'}>    About    </Link>
   <i class="bi bi-bag"></i>
   
  </div>

  <div className='sideNavDiv'>
  
   <Link className='side-nav-links' to={'/home'}>     Home     </Link>
   <Link className='side-nav-links' to={'/cart'}>     Cart ({cart.length})  </Link>
   <Link className='side-nav-links' to={'/wishlist'}> Wishlist({things.length}) </Link>
   <Link className='side-nav-links' to={'/about'}>    About    </Link>
    
  </div>

   </>
  )
}

export default Navbar 