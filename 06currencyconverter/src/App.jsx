import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setamount]=useState(0)//default value of from amount's value 
  const [from,setfrom]=useState("usd")//the default of dropdown 
  const [to,setto]=useState("inr")//default value of to dropdown 
  //in order to show the final result
  const [convertedamount,setconvertedamount]=useState(0)//default value of to amount's value
  //using custom hook too convert from usd to inr:-
  const currencyinfo=useCurrencyInfo(from)//use the initial state of the value that's needed to be passed 
  //in order to get the values of the curencies ie. the names of the currencies on the dropdown, we need to use the Object.keys() as in the object that we're getting from the custom hook contains the currency names as the keys and the values of the currecies as the values of the object:-
  const options=Object.keys(currencyinfo) 
  // const options = currencyinfo ? Object.keys(currencyinfo) : []

  //the function in order to swap the from and to using the swap button:-
  const swap=()=>{
    setfrom(to)
    setto(from)
    //the result won't change only the values of the from and to of the dropdown will get changed 
    setconvertedamount(amount)
    setamount(convertedamount)
  }

  //in order to get the final state of the amount entered by the user, we'll use the method that'll give us the final answer and perform the multiplication to get the final answer:-
  const convert=()=>{
    setconvertedamount(amount * (currencyinfo[to] || 0))//as all the keys are in currencyinfo so we'll fetch the value of the particular key using the key that's in to
  }

   return (
    <div className='flex '>
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage:`url('https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg')`
        }}
        ></div>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')`,
            }}
        >
            
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();//whenever a form is submitted, it goes at some address or some url so in order to prevent that, we're using this method 
                            convert()//gives the calculated value to us
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setfrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=> setamount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="to"
                                amount={convertedamount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setto(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default App

//a hook is ultimately a function that returns a value  so we can create our own custom hooks as well :- we can make one separate folder for creating the custom hooks and make the hooks in that in the files that are named in the name of hook name only and we need to make the file name as .js extension as the hooks are generally return js so it's a good practice to keep the file name as .jsx only if the jsx is being returned and if not then we should keep the file name as .js or whatever is getting returned 