import React from 'react'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import {Outlet} from 'react-router-dom'
//we wanna pass the things dynamically ie. home about us etc so we get an outlet from the react-router-dom 
//outlet keeps the layout as the base and will change only the things that are in the Outlets file 
//also, we need to tell in the index file that we're using a layout and giving everything inside it 
function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
