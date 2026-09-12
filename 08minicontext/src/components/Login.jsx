//we'll see how to send the data
import React, { useState,useContext } from "react"//useContext helps to fetch the values from UserContext 
import UserContext from "../context/UserContext"
import { use } from "react"

function Login() {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

    //method to send data:-
    const {setUser}=useContext(UserContext)

    const handlesubmit=(e)=>{
        e.preventDefault()//preventing value to go somewhere using url/post method
        setUser({username,password})
    }

  return (
    <div>
      <h2>login</h2>
      <input type="text"
      value={username}
      onChange={(e)=>setusername(e.target.value)}
      placeholder="username" />
      <input type="text" 
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      placeholder="password" />
      <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login
