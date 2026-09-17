//we're naming this file as todoslice just in order to get that we're using the redux toolkit it's just a naming convention:- 
//in redux toolkit, reducer is k/a slices 
import { createSlice,nanoid } from "@reduxjs/toolkit";//nanoid generates unique ids
//most imp thing in stores is the initialState 
//initial state:-how will store look at the starting
const initialState={
    todos:[{id:1,text:"hello world"}]
}

//making slice:-slice is a bigger version of a reducer
//reducer is a functionality
export const todoslice=createSlice({
    name:'todo',
    initialState,
    //in context apis also we were writing like this only but we were just declaring the functions and not writing their definitions 
    //but here in redux toolkit we also write the definition along with the declaration 
    reducers:{
        addTodo:(state,action)=>{//taking data
            const todo={
                id:nanoid(),
                text:action.payload//payload is an object that can conatin anything 
            }
            state.todos.push(todo)//adding the todo object to the initial state 
        },//whenever we do addTodo, we get access to these 2 things always //state gives the access of all the values of the initial state //action:- sometimes we may get some values eg:- in order to remove the values we'd need an id, that id we'll get from action //also we get the value of todo via action 
        removeTodo:(state,action)=>{//sending data 
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        }
    }//inside reducers we use properties and functions 
})//name should be kept by thinking carefully as when we'll use the redux toolkit of the chrome extension then we'll get this 

//todoslice has to be exported in 2 parts ie. the functionality that's it needs to be exported as well:- they're needed to be exported as all these will be needed to be used in order to upadte the state so it'll come to work individually in components 
export const {addTodo,removeTodo}=todoslice.actions


//store will need to hv awareness abt all the reducers if it doesn't hv values for them then it'll not be able to maintain all of them as it's a restricted store that doesn't update the values by taking from anyone, it'll only update the values from the reducers that we register with it
//so it requuires the list of all the reducers:-
export default todoslice.reducer
