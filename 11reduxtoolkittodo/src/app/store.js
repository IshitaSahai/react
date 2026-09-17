import {configureStore} from '@reduxjs/toolkit'
import todoreducer from '../features/todo/todoslice'

export const store=configureStore({
    reducer:todoreducer
})//it takes an object inside it

//step 1 after creating the vite app is to make store and import configureStore in it 
//step 2: next step is to create reducer
//in redux toolkit there's a different way to create reducers:- it's k/a slices 
