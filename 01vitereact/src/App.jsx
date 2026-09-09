import { use } from "react"
import Tea from "./tea"


function App() {
  //how to inject js/variables in the jsx:-
  const username="cac"
    return (
    //we can export only one element via this, inside that one element there can be any number of elements but only one main element can be exported via it <> this is k/a fragment inside which we can have multiple elements 
      // <h1>tea aur react | is </h1>
      <>
      <h1>hello {username}</h1>{/*this is k/a an expression and it's actually an evaluated expression which means that it is already prevaluated, here we don't write the js directly instead we write the final evaluated expression of js*/}
      <Tea />
      </>
  )
}

export default App
// while creating application via vite we need to use .jsx file as vite has its own default configuration in which it says that if a file contains any components then it should be named with .jsx only but if it's creatd using the createreact app then it can be easily named with .js wihtout any problem 

//the elements that have to be rendered have to be named with the first letter as uppercase as it's a best practice otherwise the page won't show the contents and shows the error in the console 
