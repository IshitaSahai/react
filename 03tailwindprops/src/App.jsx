import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
    username:"ish",
    age:21
  }

  let newarr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
    <Card username="teaandcode" someobj={myobj} somearr={newarr}/> <Card username="ishi"/> 
    </>
  )
}

export default App


//whatever value we take from the cards from here will be loaded in the props there at the 