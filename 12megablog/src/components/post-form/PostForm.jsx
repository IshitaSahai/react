import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PostForm({post}) {//whoever used the form will hv to pass the values as well 

    
    const {register,handleSubmit,watch, setValue, control, getValues}=useForm({
        defaultValues:{//in order to write the default values we nee dto get some info ie. whether the user has come here for editing the form or adding some new info to the form, if he's come for adding some new info then the initial value can be '' but if they've come ti edit the form then there should be some values that should be present as the default values that they can edit, these default values may hv come from the database/appwrite 
            title:post?.title || '',
            slug:post?.$id|| '',
            content:post?.content||"",
            status:post?.status || 'active'

        }
    })//it also gives us the watching capabilities ie. if we wanna monitor any field continuously then we can use watch, we can use watch with any form
    //control is used to get the control of any form, and it's this control that we'll pass in rte, then we'll get all the control from the rte here 
    //getValues helps us to get the values of all the forms whichever we need to hv 
    //we can also pass an object inside the useForm and put whatever values we want in the useForm 


    const navigate=useNavigate()
    const userData=useSelector(state=>state.auth.userData)

    //do this if the user has already submitted the form
    //it surely means that the user may hv given the data fs, so we'll take that data from the react-hook-form that'll contain the data that we can get from there by registering 
    //so we can create a submit form and see how the things work ie. if the value of post already exists then update it otherwise add a new value of post  
    const submit=async(data)=>{
        //if the post already exists then update it by handling file via upload file 
        //so upload the file first of all
        if(post){//updating the post 
            const file=data.image[0]? await appwriteService.uploadFile(data.image[0]):null
            if(file){//if the file has been uploaded deleting the old image now:-
                appwriteService.deleteFile(post.featuredImage)
            }
            //updating the post now:-
            const dbPost=await appwriteService.updatePost(
                post.$id,{
                    ...data,
                    featuredImage:file? file.$id:undefined,//if threre's a file then give the file id to the featuredImage else put undefined in that //it means if the file's present to update the post then put the new id of the image in featuredImage otherwise just put undefined in it 
                }
            )
            if(dbPost){//navigating user if the post has been updated 
                navigate(`/post/${dbPost.$id}`)
            }
        }else{//this block means there's nothing to update so the user has to create a new form 
            // uploading the file:-
             const file = await appwriteService.uploadFile(data.image[0]);
            // const file=data.image[0]?await appwriteService.uploadFile(data.image[0]):null
            if (!file || !file.$id) {
                console.log("File upload failed");
                return;
            }
            if(file){
                const fileId=file.$id
                data.featuredImage=fileId
                const dbPost=await appwriteService.createPost({
                    ...data,//spreading as whenever we create the forms then we'll never hv userdata in that 
                    user:userData.$id,
                })

                if(dbPost){//redirecting the user if we hv got the dbPost already 
                    navigate(`/post/${dbPost.$id}`)
                }
            }

        }
    }
    

    //slug transform:-generating the vlaue in slug by watching the title
    //if there's any space in the title then replace it with a dash(-)
    const slugTransform=useCallback((value)=>{
        if(value && typeof value==='string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .replace(/\s+/g, "-");//replace everything except these values in the title with the dash 
        }return '';
    },[])

    //using this method:-
    React.useEffect(()=>{//the way to optimize a method when it's called inside useEffect is to store the method in a variable and then  later unsubscribe it inside the return statement by using a callback using the method .unsubscribe()
        const subscription=watch((value,{name})=>{
            if(name==='title'){
                setValue('slug',slugTransform(value.title), {shouldValidate:true})
            }
        })

        return ()=>{
            subscription.unsubscribe()
        }
    },[watch,slugTransform,setValue])

  return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}
