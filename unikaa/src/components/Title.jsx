import React, { Children } from 'react'

function Title({children}) {
  return (
    <h1 className='py-3 text-2xl font-bold text-white'>{children}</h1>
  )
}

export default Title
