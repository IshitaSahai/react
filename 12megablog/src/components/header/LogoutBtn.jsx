import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    //we need to dispatch something after the logout:-
    const dispatch = useDispatch();
    const logoutHandler=()=>{
        //most of the things in appwrite are the promises that 
        authService.logout().then(()=>{
            dispatch(logout())//we're dispatching logout so that all the imp info inside the store remains updated 
        })
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
