//it's a mechanism via which pages/routes are protected
//we make a container first of all that's empty and decides weather to show the values or not //it's a protected container 
import React, {useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentication=true}) {
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector((state)=>state.auth.status)//asking store if the user is logged in or not 

    //it'll tell where we need to redirect the user and when to recheck again on change in which fields is it need to recheck again 
    useEffect(()=>{
        if(authentication && authStatus!==authentication){
            navigate('/login')
        }else if(!authentication && authStatus!==authentication){
            navigate('/')
        }
        setLoader(false)
    },[authStatus,navigate,authentication])

  return loader?<h1>Loading...</h1>:<>{children}</>
}

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// export default function Protected({ children, authentication = true }) {
//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(true);

//   const authStatus = useSelector((state) => state.auth.status);

//   useEffect(() => {
//     if (authStatus === null) return; // wait until auth loads

//     if (authentication && !authStatus) {
//       navigate("/login");
//     } else if (!authentication && authStatus) {
//       navigate("/");
//     }

//     setLoader(false);
//   }, [authStatus, navigate, authentication]);

//   if (loader) return <h1>Loading...</h1>;

//   return <>{children}</>;
// }