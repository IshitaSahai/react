import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
//whenever we need to do an api call when our component loads then we need to use the hook useEffect 
function Github() {
    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="git picture " />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response =await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}