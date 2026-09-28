const conf={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
}
export default conf
//production grade approach it's

//it's a better way of taking the env variables that's in production grade apps
//it's a good practice as if we just use that method of adding env variables in which we just use import.meta.env.VITE_APPWRITE_URL in the console then sometimes the env variable may not get loaded at all, in such cases the whole application gets crashed and it becomes very difficult to find the errors n all 
//there can be one more issue with that, it may happen that in env instead of putting the env variable inside double quotes if we write it directly (VITE_APPWRITE_PROJECT_ID="6aac1004000f85be0a2c") then in case if it doesn't contain any number then it may get treated as a number as well which shouldn't happen as the env variable should be in a string only //especially if we're working with typescript then the major issues arrise so we use this method in which we export evrything in key value pairs by expllicitly wrapping them to strings so that it's guranteed that it's a string always and can never be treated as number 


//we need to write the code in such a way that in case if in future we need to take out our authenticaton system from appwrite then also our application can run properly without any problem 

//services:- it's a class from which we export some methods and we don't care what's happening inside those methods, we need to know what data is being used, use the method, that's it

//the application doesn't get affected at all if we're using appwrite,firebase,custom database etc

//we'll be making the authentication via the documentation of appwrite 
//the appwrite takes care of all the encryption stuff, we don't need to do anything of it 
//as the service that we're making is appwrite related, so we're making a separate folder that's named appwrite that will contain all the service/appwrite related stuff
