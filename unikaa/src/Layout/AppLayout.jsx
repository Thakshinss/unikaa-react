import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className='font-kumbh'>
      <Header/>
        <main>
            <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default AppLayout
