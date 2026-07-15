import { createContext, useEffect, useState } from "react";

export const items = createContext()

export function Context({children}) {



const [cart, setCart] = useState(() => {
   
        const getItems = localStorage.getItem("saved");
        return getItems ? JSON.parse(getItems) : [];
    
});

useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(cart));
}, [cart]);
  
 














 
    function AddtoCart(item){
    const Updatelist=cart.find((sends)=>sends.id===item.id)

    if(Updatelist){
        const NewList = cart.map((sends)=>{

            if(sends.id===item.id){
                return{...sends,Quantity:sends.Quantity+1}
            }
           return sends
        })
        setCart(NewList)
    }

    else{
        setCart([...cart,{...item,Quantity:1}])


    }
    }


    function Remove(id){

        const RemovedItems = cart.filter(sends=>sends.id !==id)

        setCart(RemovedItems)

    }

  function increase(item){
        const increase =cart.map((sends)=> {if(sends.id===item.id){
            

          return {...sends,Quantity:sends.Quantity+1}
          
          
          
          
        
        }
    return sends
    }
     
    )
         setCart(increase)  

    }


    function Decrease(item){
        const decrease =cart.map((sends)=> {if(sends.id===item.id){

          return {...sends,Quantity:sends.Quantity-1};
        
        }
        return sends
    }
    
    )
         .filter((sends)=>sends.Quantity>0)


        setCart(decrease)
    }




























    

    return(
   <items.Provider value={{cart,setCart,AddtoCart,increase,Decrease,Remove}}>
    {
        children
    }

   </items.Provider>


    )

       

    
    
 }

