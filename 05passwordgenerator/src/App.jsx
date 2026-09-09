import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed,setnumberallowed]= useState(false)
  const [charallowed,setcharallowed]= useState(false)
  const [password, setpassword]= useState("")

  //making the password generator method:-
  //we need to pass all the dependencies due to which our fn needs to be called again (the password needs to be changed whenever any of these variables are changed), we're passing all the variables except the setpassword as it's the main fn that's gettig called again and again and all of them are the dependencies based on which we'll change the things 

  //useref hook:-
  const passwordref=useRef(null)//it's the reference of the password and as we don't hv any default value of password so we're usinng null by default
  //in order to get the reference we need to use a ref inside the input field of password 
  //and in order to link the button so that when we press the button then the password gets copied:-we need to use onClick with the button and pass the method copypasswordtoclipboard and create tha method to copy the password 



  const passwordgenerator=useCallback(()=>{
    let pass=""//generated password will be in this var and then will be added to the password variable via setpassword 
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"//the data via which we'll create our password will be stored in str 

    //now adding the conditions:-
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*_+=[]{}~`"

    //now a password needs to be created that'll pick up the random values from the str via a loop that'll run "length" times and final password will be created of the desired length that'll be required 
    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)//it's an index of the character ie. any random index value from 0-str.length and we need to pick that charcter from the str that has that index value
      pass+=str.charAt(char)
    }
    //the passwprd is now added to the method  
    setpassword(pass)
    //setpassword has been added as a dependency for th epurpose of optimization as it requires ti paas a value in which the things are getting set,we can ingore giving that if we don't wanna give it 
    //it's not same as that of useeffect 
  },[length,numberallowed,charallowed,setpassword])//we need to call this fn again and again during ticking checkbox for numbers and characters so there should be some optimised way to do that :-
  //we've a hook for that k/a useCallback in react :useCallback is a React Hook that lets you cache a function definition between re-renders. ie. keep the fn in the memory and then whenever that fn is called again/needs to be used again then just use that part of the fn from the memory 
  //way to use it:- useCallback(fn,dependencies)//dependencies are those things/variables which on changing again call the fn that's passed in the hook


  //we need to imlement a functionality as per which the password will get generated each time the page is loaded and it's generated each time the length is reset and the checkboxes are checked and unchecked 

  const copypasswordtoclipboard=useCallback(()=>{
      //in order to copy to clipboard we use window as we're using react and ultimately react will compile to js and then wherever it runs we'll hv the window object there
      //if we do this thing in nextjs then there'll be server side rendering and there's no window object in the server 
      // window.navigator.clipboard.writeText(password)
      //we could use the useRef as well in order to do this work:-as we can know some more things via it:-if the current object is selectable or not if it's accessible etc and can get a more optimised result
      //in order to give a good effect to the user:- 
      passwordref.current?.select()
      //we can add more optimisation by telling how much range we need to select:-if in case we need any usecase as such 
      passwordref.current?.setSelectionRange(0,101)
      window.navigator.clipboard.writeText(password)


    },[password])//function ki jin bhi cheezon s baat hogi un sbko use kr lena chahiye useCallback m so that react apne acc optimization krle as per those dependencies 
  
    

  //2 things required for the useEffect hook: callback, and a dependency array stating on which the callback fn depends ie. on altering which things will it have to be called  
  useEffect(()=>{//it gets called when our page is loaded for the first time or if anyhting in the dependencies is changed
    passwordgenerator()
  }, [length, numberallowed, charallowed, passwordgenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordref}//we're giving the reference of the password that's in the input field to the variable passwordref 
          />
          <button 
            onClick={copypasswordtoclipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setlength(e.target.value)}}
             />
             <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numberallowed}
              id='numberinput'
              onChange={()=>{
                setnumberallowed((prev)=>!prev);//in order to propogate the events, we need to use a callback function inside it, we can't set it to true permanentally otherwise the checkbox will get checked and unchecked as usual but the value of the variable will always reamin true even if it's false at some point  
              }}
              />
              <label htmlFor="numberinput">numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charallowed}
              id='charinput'
              onChange={()=>{
                setcharallowed((prev)=>!prev);
              }}
              />
              <label htmlFor="charinput">characters</label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App


//in react we don't hv any controlling feature that directly controls when which thing will render, it'll be done by any of the methods like setvalue etc that's used in the code 

//so 2 methods to call this function:- add another button by clicking which the passowrd gets generated each time or learn abt another hook of react:-useEffect hook: useEffect is a React Hook that lets you synchronize a component with an external system. used in the same way as useCallback
//synchronizing with effects:-

//in order to make the copy button functional, we need to select the input field then we need to get how much portion of the field we need to copy then we need to get the access to the browser's clipboard access  //how to know that the thing that we'll copy will be the text of that input field only as both the input field and the copy button are in the same div only but they're not interlinked/interrelated //we've a different hook for that ie. the useRef hook  

//useRef purpose:- to get the reference of something//if i need them reference of somethinng then we should use useref