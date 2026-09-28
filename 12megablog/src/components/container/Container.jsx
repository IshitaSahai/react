//container accepts our properties as a children 
//we define all the styling properties in the container
//whatever values are inside it, they're displayed as it's 
import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container
