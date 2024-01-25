import React from 'react'
import { Link } from 'react-router-dom'

function Page({page}) {
  return (
    <div className='w-full py-5 text-extrabold'>
      <h1 className='ml-20 text-gray-400 '><Link to="/" className=''>Home</Link>-<p className='inline-block text-blue-500'>{page}</p></h1>
    </div>
  )
}

export default Page
