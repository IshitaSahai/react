import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from './index'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'//whenver we use react form, we need to use this 

function Login() {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const {register,handleSubmit}=useForm()
    const [error,setError]=useState('')//errors may also occur so we're using it 

    const login=async(data)=>{//first step should be to empty out the errors:-this is a basic functionality so all login/register forms should be done like this as even though they're errors but as soon as the login/register forms' submission gets started, all the errors should be cleaned :-
        setError('')
        try{
            const session=await authService.login(data)
            if(session){
                const userData=await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate('/')//if we do it using Link then it won't get navigated by itself, it always needs to be clicked, via navigate, we can programmatically send it somewhere else 
            }
        }catch(error){
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-25">
                <Logo width="100%" />
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                Sign Up
                </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form //handlesubmit will be used always whenever we need to submit the form //handleSubmit is a method that takes another method via which we tell the way in which we wanna handle thhe form //handleSubmit is an event that gets called //this event is imp as whatever input fields we'll give, we use register in that so whatever values we've written in that, we need to maintain the state of those values that'll be done automatically via handleSubmit 
        onSubmit={handleSubmit(login)}
        className='mt-8'
        >
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email: "
                type="email"
                {...register("email",{//here we need to take the object that contains many options 
                    required:true,
                    validate:{
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}//the syntax that we need to use for input fields here is this as we're using useForm here //it's imp to spread it as if we don't then the values will get overwritten in case if register's used somewhere else in any other input field so it's compulsory to spread it everytime we use it 
                //the name that we're using here is imp as the final data that gets spreaded inside the object here's solely on the basis of it  
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password",{
                    required:true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
