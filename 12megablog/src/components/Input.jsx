import React, {useId} from 'react'

//we'll use the arrow functions as we're binding it in hooks so it'll look easy to understand 
const Input=React.forwardRef(function Input({
    label,
    type='text',
    className='',
    ...props
},ref) {//whoever will use it will hv to pass the reference as well that's very imp to pass here as that's the point of using fwdref here 
    const id=useId()
  return (
    <div className='w-full'>
      {label && <label //if label's there then it'll be displayed 
        className='inline-block mb-1 pl-1'
        htmlFor={id} 
      >{label}</label>}
      <input 
      type={type}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      ref={ref}//we're passing the ref that's been take fromuser, it'll give access to parent component and for this only we've used fwdref
      {...props}
      id={id}
      />
    </div>
  )
})


export default Input
