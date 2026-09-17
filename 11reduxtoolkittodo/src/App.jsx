import { useState } from 'react'
import Addtodo from './components/addtodo'
import Todo from './components/Todos'
import './App.css'

function App() {
  return (
    <>
     {/* <h1>learn abt redux toolkit</h1> */}
     <Addtodo/>
     <Todo/>
    </>
  )
}

export default App
