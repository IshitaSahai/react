//if we don't remember how to create projects with vite/createreactapp then search vite react or create react app on google and follow the stpes of documentation 

//to work on web=> react+react-dom
//to work on mobile app => react+react-native
//createreact app => npx create-react-app my-app is a bulky way to create projects and it takes a lot of time to create projects so we should not use it, vite sould be used now 

//js can't come to html page and do the manipulation until and unless we explicitly it's put in the html page using the script tag //there's an exception to this rule as well 
//basicreact has been made from createreact app:-
//build folder is of no use
//node_modules folder contains the dependencies that are mentioned in the packages.json file, this folder isn't available in the repositories generally but it's made every time npm install is run
// 2 files in src:index.js and app.js
//gitignore:contains which files to push in git and which not 
//package-lock.json: it's same as package.json file but in this the dependencies get locked that in that particular version of the dependencies mentioned in this file the project will work 
//all the work is performed in src or the public folder :-
//in public folder only index.html is the main file and manifest.json file is used when the project/web application is needed to be opened in the mobile devices in that case the meta tags are seen via this file it doesn't matter much
//robots.txt is used for search engine and it also doesn't mattter 
//index.html is the only main file that matters as everything is in this file only and dom manipulation also takes place via this file and it's k/a single page application dur to this reason 
//in the src folder:- the entry point of react is index.js(default name but can be changed) 
//index.js: react library is the core foundational library of react and  performs the work of taking the references amd reactDOM is the implementation of react on web just like react native is the implementation of react on mobile apps
//react is a library of js and it needs to be injected in html in order to perform any task/work 




// VIRTUAL DOM
//createRoot method: this method creates a dom like sttructure behind the scenes just like the browser dom so that it can compare both the DOMs ie. the dom of the browser and that it has created itself and then only updates the things that are updated in the UI 
//but the browser removes the whole dom and then repaints it again, it's k/a the page reload as the whole structure of the dom/the web structure gets created at that time, this is k/a the page reload ie. when the page gets reloaded the entire structure of the dom gets repainted or the entire web structure gets created 
//in virtual DOM:-we can track the whole dom in a tree like structure and whatever values get changed only take out those values from the dom and add it again 
//js keeps its own track creates a virtual dom and updates everything in that
//it's not necessary to update the UI instantaneously even if we may hv sent some updation calls but we can drop those calls via some way in order to create an optimised algo for the UI updation 





//KEY TAKEAWAYS:-
/* 
1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. */


//INTERVIEW DIRECT QN FROM REACT:-make an application that has a counter and uses a button for increment and another button for decrement 

import { useState } from 'react' 
function App() {
  
//useState hook is used kike this:-
  let [counter,setCounter]=useState(5)
  const addVal=()=>{//if setcounter is used again and again like this then still the value of  the counter will get updated only once in the ui as the useState function sends all the updates in the ui as well as the variables in the batches so all of these are bunched together into a single batch and then they're sent to the ui to get updated only once as all of these calls perform the same task so it'll be taken as a single batch 
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    //in case if we wanna update it multiple times on a single click in that case, although it's not an optimised way to do it like this, we can directly get to know how many times it needs to be updated and then update it directly but still if we wanna do it this way only then we may do it like this:-
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    //it'll give the reference of the previous value/state of counter to the setcounter as a callback and then it'll get updated each time the function is updated 
  }

  const decval=()=>{
    setCounter(counter-1);
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
