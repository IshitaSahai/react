import React from 'react'
// {username, btnText="visit me"}//for shortcut direct destructuring of props and it CAN ALSO be used as a variable //we can also hv a defualt value by passing in the destructive form like this 

function Card(props) {
    console.log(props.username)
    // console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{props.username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {props.btnText || "visit me"} 
    </button>
  </div>
</div>
  )
}

export default Card

//whenever we declare a function card it already has the access to the props(react calls it props by default) and it's the original syntax 
//props is an object and whatever we pass in the call of fn cards in the App.jsx file is taken as a property by props 