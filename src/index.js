import {StrictMode} from 'react';//core foundational library that takes all the references 
import {createRoot} from 'react-dom/client';//implementation of react on web
import App from './App';
//reacts creates its own DOM (tree stucture) which is k/a a virtual DOM then its compared with main DOM then only some of the elements are changed in the main DOM that are needed and not all of the elements 
const root = createRoot(document.getElementById('root'));
root.render(//reactDOM has a method createroot to create root at the specified place ie. taken by the parameter mentioned in the method 
  //the reference of the element is then taken into the variable root then root is asked to render the App from strict mode of react just as the main browser's DOM renders the html similarly it renders the html here 
  //now as there's no such tag like App but here we're able to create our own custom tags 
  // <StrictMode>{/*creates a dom and renders*/}
    <App />/*we are creating our custom tags, js k via html el ko render kr skte h by using the poewer of jsx , here app is a function that returns html and then it's exported in the App.js file so the thing here is that react gives a syntax in which we can make a function and return html and then it is rendered via react so we can write html via js*/
  // </StrictMode>/*this is the safe mode of react that helps to do optimizations in case if we want during development specific tasks //even if we remove it the code will work as it's without any problem*/
);
// we've got programming capabilities in html which weren't there previously 

//in case of complex UIs this concept becomes imp
