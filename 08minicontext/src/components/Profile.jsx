//we'll see how to access the data
 //taking data:-
import { useContext } from 'react'
import React from 'react'
import UserContext from '../context/UserContext'
import { use } from 'react'

function Profile() {
    const {user}=useContext(UserContext)

  if(!user) return <div>please login</div>
  return <div>welcome {user.username}</div>
}

export default Profile
