//store for the authentication:-to track if user is authenticated or not
import {createSlice} from '@reduxjs/toolkit'

//initial state for this:-
const initialState={
    status:false,
    userData:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        //individual functions of reducers need to be exported so that different components can know the state from those methods/can dispatch via those methods
        login:(state,action)=>{
            state.status=true
            state.userData=action.payload
        },
        //no need to spread the already existing data of the state as all of it is automatically covered in the redux toolkit:-
        logout:(state)=>{
            state.status=false,
            state.userData=null
        }
    }
})

export const {login, logout}=authSlice.actions//exporting the actions from the reducers of the authSlice 

export default authSlice.reducer

//further improvement that can be considered:-
//wht we wanna track is actually only the 2 methods in the state and whenever we want anything will be from these states only:-

//and we've till now only created the slice for auth and not the post
//post also should've actually gone in state only
//similarly we can create one more slice for post:-
//and then we can use state.allPosts, state.userPosts in that to add the values in that 

//now we need to make the components 