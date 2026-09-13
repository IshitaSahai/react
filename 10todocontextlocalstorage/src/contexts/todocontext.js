//as nothing is getting returned from this so we've named it as .jsx
//createContext and useContext will be used in order to avoid the .Provider thing  
import { createContext, useContext } from "react";

export const todocontext=createContext({
    //property:-
    //koi bhi component ho vlaue will be taken from here for all the components 
    todos:[//it's just a model of how our array will look like, by default it'll hv the empty arr initially 
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togglecomplete:(id)=>{}
    //we also need to add the functionality here but we'll just declare the functions and won't be adding the functionality like what the function will do, we'll add the functionality in the App.jsx file 
})//there'll be a default value that we need to pass in this createContext 

export const usetodo=()=>{
    return useContext(todocontext)//whenever we use useContext then it's imp to give the context to the useContext, context means abt what we're talking 
}

export const Todoprovider=todocontext.Provider

//in our todo app, we've:- the arrays each of which have their own title as well as id from the database if the database isn't there then we can generate the ids ourselves, the completed or not value ie. the checkbox,
//functionalities:- add todo, edit todo, toggle todo, remove todo, listing of todos.
