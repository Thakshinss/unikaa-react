import React from 'react'

function Testimonial() {
  return (
    <section className='flex items-center justify-center py-24 bg-slate-100'>
        <div className=' h-full w-[70%] bg-white shadow-lg rounded-lg p-10'>
            <h1 className='pt-8 pb-3 text-xl font-extrabold text-center text-blue-500 md:text-3xl'>Check out what our client's say</h1>
            <div className='p-10 py-24 bg-blue-600 rounded-lg' >
                <p className='text-xl text-white md:mx-24'>It's simple to deploy. The interface is easy to learn for non technical traders. I would have said Unikaa is excellent software for all kinds of markets. If you're looking to learn for a way to learn and earn I highly recommend you start your trading by unikaa chart.</p>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
