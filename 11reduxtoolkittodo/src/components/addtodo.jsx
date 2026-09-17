import  {useState} from 'react'
import {useDispatch} from 'react-redux'
//usedispatch and useselectore are the wireups of react they're not in redux toolkit:-
import {addTodo} from '../features/todo/todoslice'

function Addtodo() {
    //in addtodo we need to work via dispatch
    const [input,setInput]=useState('') 
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        //dispatch reducer ko use krke store k andar ki values m change krta h
        //reducer has to be called inside dispatch:-
        dispatch(addTodo(input))
        setInput('')
    }
  return (
     <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default Addtodo
