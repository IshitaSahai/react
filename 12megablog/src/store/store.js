//how to do state management using redux toolkit:-
import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./authSlice";

const store=configureStore({//only one parameter inside store ie. reducer
    reducer:{
        auth: authReducer,
        //todo: post:postSlice//this should also be there so that our application doesn't have to send the web request again n again and it can take all the post related info directly at the time of element getting mounted /loaded and store that info in the store so that our application doesn't hv to make the web request again and again and we can take everything directly from the store 
    }
})

export default store

