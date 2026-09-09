//we're trying to see that how after compilinng react sees the html that we return in our function 

// import { Children } from "react"

//react tries to make a tree with all the elements that we're returning  
//this is something that we get via react:-this is how every element has to be written if someone is using our library 
const reactel={
    //type of el
    type:'a',//a tag
    props:{//properties of the element 
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const maincontainer=document.querySelector('#root')


//now we wanna write a method that renders this reactel by adding/injecting it to the root 

function customRender(reactel, container){
    // const domel=document.createElement(reactel.type)//after creating the element that we wanna insert //as we've already defined the way in which we need to create the elements via reactel we take the element type to create it in the dom first and then add it to the root
    // //and rn the element is empty container so we need to insert something in it:-
    // domel.innerHTML=reactel.children//till here the code is okay 
    // //setting attributes in this dom element
    // //from here there's a problem as we are adding the attributes one by one that may cause problems in case if multiple attributes are to be added then so we need a modular code that is loop based 
    // domel.setAttribute('href',reactel.props.href)
    // domel.setAttribute('target',reactel.props.target)
    // container.appendChild(domel)

    const domel=document.createElement(reactel.type)
    domel.innerHTML=reactel.children
    //using for-in loop
    for (const prop in reactel.props) {
        //go to each element and take its value
        //in case if people gave some children as the key in props then:-
        if(prop==='children') continue;
        domel.setAttribute(prop,reactel.props[prop])//setting the attribute by telling that add prop and set its value by accessing the value from its key using the braces like it's done in accessing value in a ds containing the key value pairs
    }
    container.appendChild(domel)

}
customRender(reactel,maincontainer)//this method can be designed 
