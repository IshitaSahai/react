import React from 'react'
import appwriteService from '../appwrite/config'//info to create card 
import { Link } from 'react-router-dom'

//we're taking all the values in this by destructring so we'll hv to take the values in the home page as well by destructuring only
function PostCard({$id, title, featuredImage}) {//these are the props that're needed to display postcards that'll be available when we will use a query then we'll get it via appwrite //appwrite gives the variable id as $id so we get it using $id instead of simply id 

  return (
    //in order to make the whole card clickable:- we're using Link //in link we don't hv to give the complete url, we can go fwd from where we currently are:-
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
