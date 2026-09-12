import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from "react-router-dom";
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
//we don't need to render the App here as we've used the react router here so we need to know how to create router in order to pass it as a prop inside the RouterProvider

//making a router:-we use a method k/a createBrowserRouter and take an array inside it and add all the objects in the array that we need 
// const router=createBrowserRouter([
//   {
//     path: '/',//top level element inside which nesting is getting done 
//     element:<Layout/>,
//     //there was only the need to add the object that has 2 values but as we need to add the further values in it that need to change so we're adding a further children array in it as well 
//     children: [//the othet values that we need to add in it are home about us contact us are all the children that we need to add 
//       {
//         path:"",//slash(/) is already there in the outer path so we've the choice of adding the further path here 
//         element:<Home/>
//       },
//       {
//         path:'about',//
//         element:<About/>
//       },
//       {
//         path:'contact',//
//         element:<Contact/>
//       }
//     ]
//   }
// ])

//another way of creating router:-
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      path='github' 
      element={<Github/>}
      loader={githubInfoLoader}/>
    </Route>
    //via loder if we need to access some data from the api/database or something then we can directly do the api calls from here 
    //as soon as we go to the web page, before clicking the link, that event would've already occured and data fetching will take place before even the useEffect, as soon as we hover over the link the fetching of the api starts and it goes to the cache behind the scenes
  )
)

//we need to make one more route in which we do /user.id or something as such that gives us the id, so we need 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
