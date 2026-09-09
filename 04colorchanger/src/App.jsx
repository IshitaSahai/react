import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')

  // const changecolor=()=>{
  //   color=document.querySelector('button').innerHTML
  //   setcolor(document.querySelector('body').style.color='color')
  // }
  return (
    <>
      {/* <button onClick={changecolor}>red</button>
      <button onClick={changecolor}>green</button>
      <button onClick={changecolor}>blue</button>
      <button onClick={changecolor}>olive</button>
      <button onClick={changecolor}>grey</button>
      <button onClick={changecolor}>yellow</button>
      <button onClick={changecolor}>pink</button> */}

      <div className='w-full h-screen duration-200' 
      style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'red'}}>red</button>
            <button onClick={()=>setcolor("green")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'green'}}>green</button>
            <button onClick={()=>setcolor("yellow")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'yellow'}}>yellow</button>
            <button onClick={()=>setcolor("blue")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'blue'}}>blue</button>
            <button onClick={()=>setcolor("pink")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'pink'}}>pink</button>
            <button onClick={()=>setcolor("orange")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'orange'}}>orange</button>
            <button onClick={()=>setcolor("lavender")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'lavender'}}>lavender</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

//onclick expects a callback/function in it, it doesn't take a return value of the and in order to pass the parameters we need to do a callback only so that parameters can be passed in it 

//when the button is clicled, rerendering takes place ie. Re-render = React re-executes your component to update the UI when state/props change