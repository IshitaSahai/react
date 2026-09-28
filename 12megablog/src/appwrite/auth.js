import conf from "../conf/conf";//in order to get all the values
import {Client,Account,ID} from 'appwrite'

//if we directly copy paste the stuff from the documentation then if we make it a service then the account.create will have to be given manually to it so we need to expose everything to our registered component, so there'll be a issue in that ie. everytime the ui and the business logic has to be injected everywhere so it creates a problem many times

//this is one service of appwrite:-
// so we can have a code improvement via this quality code here:-
export class AuthService{
    client=new Client()
    account;
    //we'll use a constructor so that whenever our object is created then our client should be made and we should hv the access to the accounts:-
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client)//after getting the value in client we're adding it in account 
    }
    //making a method to create an account so that ther's no dependency so that in case if we need to change anything then we don't need to make the changes everywhere:-
    //we'll make a method and call all the services of appwrite in it by making a wrapper:-
    //we can use async await as it's a promise so either we can use promises or async await both perform same task:-
    //now our application will run as it's irrespective of the fact where we're sending the parameters so this method doesn't hv to do anything with it 
    async createAccount({email,password,name}){
        try{
            //if we don't wanna use this service then we can change the constructor and use firebase or anything that we want and then we can change the things here in this under the hood:-
            const userAccount=await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if(userAccount){
                //call another method:- for login if the account has already been created 
                return this.login({email,password})
            }else{
                return userAccount
            }
        }catch(err){
            throw err
        }
    }
    //if user account has already been created then we can directly login to the user's page using this:-
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(
                email,
                password
            );
        }catch(err){
            throw err
        }
    }

    //method to check if logged in or not:-
    //there's no need to pass any arguments in this method, account property automatically provies us such methods that help us to check 
    async getCurrentUser(){
        try{//we're not handling here the case in which we've not found the account at all
            return await this.account.get()
        }catch(error){
            //the case in which we're not able to reach out to the service 
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null
    }

    async logout(){
        try{
            return await this.account.deleteSessions()
        }catch(err){
            console.log("appwrite service:: logout:: error",err)
        }
    }
}   

const authService=new AuthService();


export default authService//now if we export it directly then whoever uses this class they always hv to make an object in order to use all the methods of this class
//so we can make an object directly and export it so the person using it won't hv to do anything they'll just hv to import the object and they'll hv all the methods attached to it

//so anyone importing this object can call all the methods directly 

//now the next thing is that we need to make both a client as well as an account as all the methods are put on account (.create,.logout etc)

//services are made in such a way that only this file knows what's happening under the hood so even if any changes are made in the applications/backend service, only this file has to be changed
//frontend doesn't know anything abt all this stuff 


//whenever authentication needs to be done via appwrite this code can be used 
