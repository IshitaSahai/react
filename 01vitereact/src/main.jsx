import  React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import App from './App.jsx'

//App is just a function that can be declared here as well:-
function Myapp(){
  return(
    <div>
      <h1>custom app!</h1>
    </div>
  )
}

// const reactel={
//     //type of el
//     type:'a',//a tag
//     props:{//properties of the element 
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }

//creating a variable to insert to the root:-
const anotheruser="react"//when the whole tree formation is complete then the variables injection takes place 
const reactel= React.createElement(
  'a',//first parameter is the tag
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',//2nd parameter is the object
  anotheruser//variables get injected as it's 
  //as everything gets converted to an object utimately so the evaluation part such as if else and other evaluations n all can't be done inside this as it's the syntax of js object that no sort of expression can be written inside it 
)//createElement takes an object but in a predefined syntax 


const anotherel=(
  <a href='http://google.com' target='_blank'>visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <Myapp />//this property html sort of syntax assumes that something like a function will be passed here which will get parsed and get converted to the object/tree sort of the structure 
    
    // <reactel />//so if we directly try to execute the object here then it won't get executed as it expects a function and not an object 

    // reactel//it won't execute this way as well coz in case of our customreact we created separate method to render it but here it's getting rendered via the render of react  

    // anotherel//this i sgetting executed but if we were directly passing object then it wasn't getting executed as it wasn't how default react expects the object to be that it parses, the syntax that react expects would've been different from that of this object 

    //Myapp() //as Myapp is a fn it can be written like how a normal fn is executed 
  // </React.StrictMode>

  reactel
  // <App/>
)
//the work that's being done here is same as what's done at the 01basicreact but it's considered more lightweight as it has removed all the testing libraries and everything that was unneccisarily present in the basicreact 
{/* <Myapp /> this is a jsx syntax but this syntax comes from the bundler that react uses, the work of this bundler is that it  improves the syntax and upgrades the  syntax due to it only we are able to write the html syntax in this file and that's y the file is k/a .jsx which means html is mixed in js in this syntax */}
// parsing of the whole html syntax is done and it's converted into a tree like the syntax that we wrote while creating our customreact 