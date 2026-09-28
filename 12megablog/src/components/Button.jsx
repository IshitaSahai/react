import React from 'react'
//children is just a name/variable that stores button text, it can be named anything ie. buttontext etc, it's just a fancy name for a button text here:-
export default function Button({
    children,
    //here we're giving some default values of these properties so that if someone gives these values then it'll be considered otherwise these ones will be taken as final values:-
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props//all other properties (if any) have been passed then they'll come via this and can be used as it's for the use
}){
  return (
    <button type={type} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>//we can't use back ticks directly as it's the syntax of js 
  )
}

//FORWARD REFERENCE:- forward ref means that if we're making the entire input field in one place and it has to be used on some other login page having the input fields on multiple places somewhere else then in order to get the reference of the input fields in  the login page, we need to get the reference of the input field in that page in order to get the access of the state in it, in that case this hook of react comes into play ie. FORWARD REFERENCE 
