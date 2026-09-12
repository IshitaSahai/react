import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

//jb bhi jis bhi component m data lena ho jis bhi component m to useContext call kro aur data lelo
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>react with tea</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App


//contextapi-we'll make a global variable that'll contian all the data 
//state doesn't get updated so easily so we can't make a global file and take all the values from there but as it's not an optimized way to do things and we ultimately get stuck in the same problem that there's a state mismatch and there's no synchronization
//our project will run into a problem that any variable will be able to update it and it'll get updated even in the places where we don't want it to get updated 
//so we need to create a folder context in src there's no naming restriction as such as it's not a framework, it's a library so the naming restriction isn't that strong
