import React from 'react'
import img from "../assets/contactus.png"
import Page from '../components/Page'

const input = [
  {
    id:1,
    name:'Your Name'
  },
  {
    id:2,
    name:'Your Mobile Number'
  },
  {
    id:3,
    name:'Your Email Address'
  },
  {
    id:4,
    name:'Your State'
  },
]

function Contact() {
  return (
    <main className='bg-gray-100'>
      <Page page="contact"/>
      <div className='pt-6 text-center pb-14'>
        <h1 className='mb-3 text-3xl font-extrabold text-blue-500'>Get in touch with us</h1>
        <p className='text-lg text-slate-500'>You will find yourself working in a true partnership that results in an incredible ,<br />experience, and an end product that is the best.</p>
      </div>
      <div className='flex-wrap items-center justify-center md:flex'>
        <div className='bg-green-500 '>
          <img src={img} alt="" />
        </div>
        <div >
          <form action="" className='flex flex-col'>
            {
              input.map((input)=>(
                <input type="text" placeholder={input.name} className='py-3 pl-2 pr-32 m-2 text-xl text-left rounded-lg bg-slate-200' />
              ))
            }
            <button className='p-3 m-3 text-xl font-bold text-white bg-blue-500 px-7 rounded-3xl'>Submit</button>
          </form>
        </div>
      </div>
      <div className='flex items-center justify-around py-10'>
        <div>
          <h1 className='text-2xl font-bold text-blue-500'>Address Info</h1>
          <p>Chennai, Tamilnadu,India.</p>
        </div>
        <div>
          <h1 className='text-2xl font-bold text-blue-500'>Call us on</h1>
          <p>+91 7092 77 44 55 ,<br />
            +91 7092 77 44 22</p>
        </div>
        <div>
          <h1 className='text-2xl font-bold text-blue-500'>Email us</h1>
          <p>Info@unikaa.in</p>
        </div>
      </div>
      
    </main>
  )
}

export default Contact
