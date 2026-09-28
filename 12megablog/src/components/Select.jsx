import React, {useId} from 'react'

function Select({//properties:-
    options,
    label,
    className="",//better syntax to put empty strings in it as if it'll be null(ie. noone passes anything in it) then also it'll work 
    ...props
},ref) {
    const id=useId()
  return (
    
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <select
      {...props}
       id={id}
       ref={ref}
       className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
       >
        {options?.map((option)=>(
            <option key={option} value={option}>
                {option}
            </option>
        ))}
       </select>
    </div>//if options won't hv any value and we loop via it directly then the application will crash fs so we're checking it first 
  )
}

export default React.forwardRef(Select)
