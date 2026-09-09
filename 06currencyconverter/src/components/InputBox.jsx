//making the components reusable 
//the inner container inside the white box is the input here
//all the components should be capitalised 
import { useId } from 'react';


function InputBox({
    label,
    amount,
    onAmountChange,//jo bhi iss component ko call kr rha h vha p iski baat hogi coz when amount will change the state will also change input is getting controlled from here 
    onCurrencyChange,
    currencyOptions=[],//we need an array to be passed otherwise we have an empty array by default 
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   //it can also be optimised further,  for eg: in this we're using label and this label will get repeated each time and get changed also so we can use the hook of react ie. useId that'll work by generating unique ids that can be passed to accessibility attributes :every html has accessibility attribues via which if the user wants to take the access by doing tab tab tab then they can get the access but their mapping becomes difficult as it's not possible to give so much unique in our case as there're so many currency values 
   //so this hook is very necessary here:-
   const amountInputId=useId()//here we'll get a unique value that consists of random strings and numbers and we'll use it to bind it in some things 

   //if we want to use id with each and every key that we have then we shouldn't use it with all of them, it's not allowed to do so

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
              {/* we've put a label here for uniqueness */}
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}//here also we've binded it with the input field as well
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}//it means if onamountchange is available then use it 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* whenever a loop is in jsx then the performance gets degraded a lot in order to stop/prevent this thing a key needs to be passed in order to increase the performance  SO REMEMBER THE KEY IN LOOPS IN REACT */}
                        {currencyOptions.map((currency)=>(
                          <option key={currency} value={currency}>
                            {/* in order to take the key, we should prefer the uniwue values, they can be ids if we're taking it from the database or eny other thing like index or here like we have taken currency  */}
                            {currency}
                          </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
