import { useEffect, useState } from 'react'
import {Todoprovider} from './contexts'
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos,settodos]=useState([])//default state is empty arr as if there's null then there'll be problem so in case of empty array we'll get to know that if there's a loop then we can know that there's no value in the array so we cna work accordingly 
  const addtodo=(todo)=>{
    //todo is a string value that we need to add in the array of the state 
    // settodos((prevtodovals)=>[todo,...prevtodovals])//problem here's that we're not getting the todo values as a single string, we're getting them as an object, so we need to add the values in the form of an object here:-
    settodos((prevtodovals)=>[{id:Date.now(),...todo},...prevtodovals])
  }

  const updatetodo=(id,todo)=>{//we need to loop on the array that contains all the objects and then find out which property needs to be changed with the help of the id and then we'll update that todo

    //the prevtodo.id here is the id of all the individual elements of the array whereas 'id' is the  value that's passed inside updatetodo as a parameter that's to be found 
    settodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id?todo:prevtodo))//looping via map over the todo, every todo is an object and every object has an id 
  }


  const deletetodo=(id)=>{
    //while deleting the todos, we don't use map as it's not a good syntax, as we need a new array that contains all the vlaues except the one value that's the id, so we use filter here 
    settodos((prev)=>prev.filter((todo)=>todo.id!==id))//all the vlaues that won't be matching will come in the array, rest will be excluded 
  }

  const togglecomplete=(id)=>{
    //taking the access of the previous state of the array via (prev)=>prev.map((prevtodo)=>)0
    settodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id?{...prevtodo, completed:!prevtodo.completed}:prevtodo))//we keep the rest of the values of the object as it's and only overwrite the value of the object that's 
  }
  //we'll define the whole functionality here only, we'll use todoprovider in order to wrap everything inside it 

//this is how we can get all the things from the local storage when our application loads
  useEffect(()=>{
    //we can access local storage directly till we're in react and we're not talking abt the server side rendering 
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      settodos(todos)
    }
  },[])

  //now setting all the values of todos into the local storage:-
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (//our work doesn't get completed on just wrappig everything inside todoprovider here, we need to provide all the values that are needed to be provided by the provider 
    //by using {} inside the outer braces, we're trying to destructure it as we've already imported it 
    //todos is a property so we get the property here and all others apart from it are the methods 
    <Todoprovider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>

                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here:-context s laaye hue toodos p loop lgana pdega and then we'll pass the prop to todo items and call them */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}

                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
