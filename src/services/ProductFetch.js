 async function Fetchproduct()
  {

        const Response=await fetch("https://fakestoreapi.com/products")

        return await Response.json()
        
  }

  

export default Fetchproduct 