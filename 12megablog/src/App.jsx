import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'//react-redux is the merger ie. when we need to use redux with react
import authService from './appwrite/auth'
import './App.css'
import {login, logout} from './store/authSlice'
import Footer from './components/footer/footer'
import  Header from './components/header/header'
import { Outlet } from 'react-router-dom'
import { pingAppwrite } from './appwrite/client'
//we also need to use Dispatch as well in order to do something like getting the current user as we're changing the state

function App() {

  const [loading,setLoading]=useState(true)//as soon as the aaplication loads, the loading state of the application is true as useEffect is doing some work, inside useEffect we can set oue state to be false 
  // console.log(import.meta.env.VITE_APPWRITE_URL)//it's done when app is created using create react app
  const dispatch=useDispatch();
  //now as soon as the application gets loaded then take useEffect and ask the service if it's logged in or not 
  useEffect(()=>{
    pingAppwrite()

    //askign authservice who's it's current user:-
    authService.getCurrentUser()
    .then((userData)=>{
      //we need to dispatch the userData so that we get it in action.payload of the login function in auth:-
      if(userData){
        dispatch(login(userData))//
      }else{
        dispatch(logout())//if we're not able to get the userData then we'll dispatch logout which means that we're updating our state that we're not logged in 
        //our state will always be updated, either it'll hv the access  of the current user or our state will hv wriiten that we're logged out 
      }
    })
    .catch((err)=>{
      console.log("error while fetching the user:",err)
      dispatch(logout())
    })
    .finally(()=> setLoading(false))
  },[dispatch])

  // return (
  //   <>
  //     <h1>a blog app in appwrite</h1>
  //   </>
  // )
  //we'll return as per our own wish:- that's k/a conditional rendering:-
  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
           {/* todo: */}{/* <Outlet/> till now we've not configured react router dom so we can't use this Outlet here */}
           <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
//whenever a new value is added in env variable then we have to stop the project and run it again most of the times 

//here we'll check via state n all as soon as the app loads then our user is logged in or not and then if it's logged in then we'll show the posts n all otherwise we'll not show them posts andd display some msgs that we can't show them.....

//one state will be loading state:-as when we fetch the data from any application then it may take some time for the network request 
//so whenever we need to get anything from the database/the network then in that case it's good to hv a loading state that allows us to hv conditional rendering using if else and check if the loading is true then we can show the loaidng icon otherwise we can show the data
