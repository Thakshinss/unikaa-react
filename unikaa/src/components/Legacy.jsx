import React from 'react'

const legacy  =[
    {
        id:1,
        num:"18+",
        name:"Years Experienced"
    },
    {
        id:2,
        num:"600+",
        name:"Happy Clients"
    },
    {
        id:3,
        num:"24/7",
        name:"Support"
    },
    {
        id:4,
        num:"12+",
        name:"No.ofStates"
    },
]

function Legacy() {
  return (
    <section className='flex-wrap items-center justify-between mx-24 my-10 mb-4 md:flex'>
        {
            legacy.map((legacy)=>(
                <div key={legacy.id} >
                    <p className='text-5xl font-bold text-red-500 '>{legacy.num}</p>
                    <p className='text-xl font-semibold text-blue-500'>{legacy.name}</p>
                </div>
            ))
        }

    </section>
  )
}

export default Legacy
