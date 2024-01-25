import React from 'react'
import Title from '../components/Title'

const activities = ['Upcoming Events','Seminars','Performace']

const links = ['Terms & Conditions','Refund Policy','Privacy Policy']

const headOffice = ['+91 7092 77 44 55',' +91 7092 77 44 22','Info@unikaa.in']

const state = ['Tamilnadu', 'Kerala', 'Andhra']


function Footer() {
  return (
    <footer className='px-20 pt-5 pb-10 text-white bg-cyan-600'>
      <div className='flex flex-wrap justify-between'>
        <div>
          <Title>Unikaa Activities</Title>
          <ul>
            {activities.map((activity)=>(
              <li>{activity}</li>
            ))}
          </ul>
        </div>
        <div>
          <Title>Quick Links</Title>
          <ul>
            {links.map((activity)=>(
              <li>{activity}</li>
            ))}
          </ul>
        </div>
        <div>
          <Title>Head Office</Title>
          <ul>
            {headOffice.map((activity)=>(
              <li>{activity}</li>
            ))}
          </ul>
        </div>
        <div>
          <Title>State Contact</Title>
          <ul>
            {state.map((activity)=>(
              <li>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center mt-8'>
      © 2024 Unikaa. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
