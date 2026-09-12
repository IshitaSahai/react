//context will be made by breaking into multilple files, as context can be for multiple things:- user, login, product, carttc
import React from "react";
const UserContext=React.createContext()//creating context 
//createContext is a method that's same as the useState etc
export default UserContext

//each context gives a provider that's used to wrap all the components inside it so that all the components get the access to the usercontext(it's like a global variable) 
//eg:-
{/* <UserContext>
    <Login/>
    <Card>
        <Data/>
    </Card>
<UserContext/> */}

//we need to make the provider file that's a jsx file as well and then we can use it as a provider so that all the others can access it 