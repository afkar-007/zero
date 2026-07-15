import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import { Context } from './Context/createContext.jsx'
import { CreateWishlist } from './Context/CreateWishlist.jsx'


createRoot(document.getElementById('root')).render(

 <BrowserRouter>
<CreateWishlist>
 <Context>
    <App />
 </Context>
</CreateWishlist>
 </BrowserRouter>

)
