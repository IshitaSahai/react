//just like appwrite conf service it's
import conf from "../conf/conf";//in order to get all the values
import {Client,ID, Databases, Storage, Query} from 'appwrite'


export class Service{
    //declaring variables:-
    client=new Client()
    databases;
    bucket;

    constructor(){//account should be created when constructor is called
        this.client.setEndpoint(conf.appwriteUrl)
        this.client.setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    //to create the blog post:-
    async  createPost({title,slug,content,featuredImage,status,user}) {
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//considering it as doc id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    user
                }
            )
        }catch(err){
            console.log("appwrite service:: createPost:: error",err)
        }
    }

    async updatePost(slug, {title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(err){
            console.log("appwrite service:: updatePost:: error",err)
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }catch(err){
            console.log("appwrite service:: deletePost:: error",err)
            return false
        }
    }

    //method of getting a single post by using slug:-
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(err){
            console.log("appwrite getPost:: logout:: error",err)
            return false
        }
    }

    //we need to get all the active values out of all the posts that have ever been made:-
    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        }catch(err){
            console.log("appwrite getPosts:: logout:: error",err)
            return false
        }
    }

    //file upload methods:-
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [
                    "read(\"any\")"   
                ]
            )
        }catch(err){
            console.log("appwrite uploadFile:: logout:: error",err)
            return 
        }
    }

    async deleteFile(fileId){
        try{    
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        }catch(err){
            console.log("appwrite deleteFile:: deleteFile:: error",err)
            return false
        }
    }

    getFilePreview(fileId){//it gives the url  in return 
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }

    //for featuredImage also a method will be created that'll hv the storage of the image
    //whenever the user will call the method to create a post, we'll return an id of the post that we'll be passing here 
}

const service=new Service()//as the object has been created using new variable so the constructor has to be created definitely 

export default service