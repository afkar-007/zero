async function GetProduct(id) {
    const Response = await fetch(`https://fakestoreapi.com/products/${id}`)
    return await Response.json()
    
}

export default GetProduct