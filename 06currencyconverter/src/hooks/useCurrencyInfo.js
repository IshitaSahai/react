//how to make custom hooks:-

//custom hooks can also  use builtin hooks like useEffects or useState
import { useEffect,useState } from "react"
//Standardized approach:whenever we use a hook we should name it with the prefix use:-
function useCurrencyInfo(currency){//our hook takes a compulsory currency argumment
    //our hook calls an api and returns a data and we want to call the api when someone uses this hook that's y we fetch the api inside the useEffect method so that it's called only when someone uses the hook 
    //the hook that we can invoke whenever a component is mounted or its life cycle event is triggered  is useEffect()

    //automatically fetch will be called via this function and there's no need to create another function inside this function that will call an api, we can do the work directly here in this function only 
    const [data, setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())///initial result is in string format so it's needed to be converted to json format 
        .then((res)=>setdata(res[currency]))//we'll get the object containing the key value pairs corresponding to the currency that we want the value for //we're accessing the value of the key using the key itself //this response is in json format now we need to hold it in a variable //if we hold the data in a regular variable then the ui will never get upadted so our hook will directly return the value from the 
    },[currency])
    console.log(data)
    return data

}

export default useCurrencyInfo