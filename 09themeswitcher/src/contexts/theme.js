//different approach
import {createContext, useContext} from 'react'

//whenever someone calls this context, then we'll get both the variables as well as the methods that're there in this 
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},

})//we can have a default value that tells when a context is made initially then what all values will be there in it 

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

