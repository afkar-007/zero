import Login from "./pages/Login"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import About from "./pages/About"
import Payment from "./pages/Payment"

import Navbar from "./components/Navbar"

import { Routes,Route } from "react-router-dom"


function App() {
 

  return (
    <>

      



  <Routes>
   
 <Route path="/" element={<Login/>}/>
 <Route path="/home" element={<Home/>}/>
 <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
 <Route path="/cart" element={<Cart/>}/>
 <Route path="/wishlist" element={<Wishlist/>}/>   
 <Route path="/about" element={<About/>}/>
 <Route path="/Payment" element={<Payment/>}/>

  </Routes>


    
    
    </>
      
  )
}

export default App
