import { useState } from 'react' //hook has to be brought into use using this line
 import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
//now there's no neeed to import react in order to do tree parsing and perform the tasks of the function this is due to the babble 
import './App.css'
//PROBLEM:UI UPDATION IS CONTROLLED BY REACT:-
//variables can be updated and any data can be added but in case of changing the UI the hooks come into play, in this way UI updation is handled by react itself 

//useState hook is responsible to change the state //changing state  doesn't mean changing the value, it means to propogate the change to the UI ie. the DOM 
function App() {
  
//useState hook is used kike this:-
  let [counter,setCounter]=useState(5)//inside the braces the default value that we wanna give the variables has to be written //we get 2 things from useState in the form of an array:- a value counter and a function setCounter 
  //"counter" is just a variable it can be named something else as well it's just that useState gives 2 things out of which one is the variable to be updated and another is the function that updates that variable eg: counter gets updated via the setCounter function 
  //the default value in the counter variable is 15 as it's the value that's given inside the useState function
  // let counter=15
  const addVal=()=>{
    // counter+=1
    // setCounter(counter)//or we can directly update the counter in the setCounter function like this:-
    if(counter<20){
      setCounter(counter+1)
    }

  }

  const decval=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>tea and react </h1> 
      <h2>counter val:{counter}</h2>
      <button onClick={addVal}>add val {counter}</button>
      <br />
      <button onClick={decval}>decrease val {counter}</button>

    </>
  )
}

export default App
