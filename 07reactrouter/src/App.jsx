import { useState } from 'react'
import {Header} from './components/header'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    </>
  )
}

export default App

//we want to keep the header and the footer same and change the home and other pages, so one way is to call the header and footer in all the components ie. home contact us about us etc but it's not the optimised way so we try another way ie. creating a common file Layout.jsx that 