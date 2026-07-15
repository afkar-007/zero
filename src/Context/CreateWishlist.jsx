import { createContext, useEffect, useState } from "react";


export const datas=createContext()

 export function CreateWishlist({children}) {

   const [things, setThings] = useState(()=>{

    const getItems=localStorage.getItem("item")
    if(getItems){
        try{
            return JSON.parse(getItems)
        }
        catch (error){
            console.log(error)
            localStorage.removeItem("item");
            return []
            
        }
    }
    return [];
})
    
    

useEffect(() => {
    localStorage.setItem("item", JSON.stringify(things));
}, [things]);

    







 function AddtoWish(item){
  const updatedList = things.find((sends)=>sends.id===item.id)

  if(updatedList){
    const NewElement =things.map((sends)=>{if(sends.id===item.id){
        return{...sends,...sends,quantity:sends.quantity+1
    
    
    
    }
        

    }
    return sends

    })
    setThings(NewElement)







  }


else{
    setThings([...things,{...item,quantity:1}])


}





 }


 function Remove(id){
    const Removed = things.filter((sends)=>sends.id!==id)
    setThings(Removed)

 }




















    return(

        <datas.Provider value={{things,setThings,AddtoWish,Remove}}>

            {children}

        </datas.Provider>
    )

    
}
