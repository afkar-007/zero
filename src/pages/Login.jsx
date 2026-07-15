import React, { useEffect, useState } from 'react'



import '../styles/Login.css'
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate=useNavigate()

  const[userName,setUserName]=useState("")
  const[password,setPassword]=useState("")
  const[rePassword,setRePassword]=useState("")
  const[error,setError]=useState("")

  useEffect(()=>{

    const passWay=localStorage.getItem("gate")
    if(passWay==="loggedin"){
      navigate('/home')
    }

  },[])


  function Authenticating(e){
    e.preventDefault()
    if(userName.length<3){
      setError("User name  minimum 3 characters")
      return
    }
    if(password.length<4){
      setError("Password minimum 4 characters")
      return
    }
    if(rePassword.length<1){
      setError("Enter confirm password")
      return
    }

    if(password!==rePassword){
      setError("Password not match")
      return
    }
    
    setError("")
    navigate('/home')
   

    localStorage.setItem("gate","loggedin")
  }





  return (
    <>
   
<div className='login-page'>

<div className='login-container'>
  <h1 className='zero'>ZERO</h1>
  
      
        
    
       <form action="">
       
           <input type="text" value={userName} placeholder='Enter User name'   onChange={(e)=>{setUserName(e.target.value)}}   />
           <br /> <br />
           <input type="password" value={password} placeholder='Password'   onChange={(e)=>{setPassword(e.target.value)}}   />
           <br /> <br />
           <input type="password" value={rePassword} placeholder='Confirm password'  onChange={(e)=>{setRePassword(e.target.value)}} />
            
           <p className='error-message '>{error}</p>
           

            <button onClick={(e)=>Authenticating(e)}>sign in</button>


       </form>
    
    </div>

      </div>
      
    </>
  )
}

export default Login