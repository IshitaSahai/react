import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'

function AllPosts() {

    const [posts,setPosts]=useState([])//we'll store all the posts inside this
    // const authStatus = useSelector((state) => state.auth.status);
    //as soon as the component will load we'll use useEffect and all the work will be done 
    useEffect(()=>{
        appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
        }).catch((err)=> console.log(err))
    },[])
    
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div className='p-2 w-1/4' key={post.$id} >
                    <PostCard {...post}/>
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts

//in order to show all posts