import React from "react";
import UserContext from "./UserContext";

//as we'd studied abt outlets ie. keeping header and footer as it's and display the outlets, similarly whatever the props come in we take them and use them as it's  with the help of {children}, children is just a generic name that tells whatever comes in it just use it as it's just by passing it forward 
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(//anything can be ther inside the children ie. card component, dashboard etc 
        //along with UserContext.Provider we also pass the data/prop that'll be accessed via it 
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider