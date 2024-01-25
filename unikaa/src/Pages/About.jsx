import React from 'react'
import aboutImg from "../assets/about/aboutus.png"
import Legacy from '../components/Legacy'
import Page from '../components/Page'
import img from "../assets/contactus.png"
import hero1 from "../assets/Home.jpg"
const imageURL = 'https://unikaa.in/wp-content/themes/bank_cards_fintech/assets/images/aboutus.png'
const features =[
  {
    id:1,
    title:"Design by safety",
    desc:"Unikaa robots were developed from the ground up to Execute orders safely next to people in High-frequency trading environments, without Delay."
  },
  {
    id:2,
    title:"Customizable",
    desc:"Trading in the stock market can be a chaotic place, with constantly changing conditions that make it challenging for conventional automation."
  },
  {
    id:3,
    title:"Flexible & adopt",
    desc:"In the new Auto Trading reality, Flexible is the new Fast. And our smart, collaborative robots are ideal for environments requiring frequent."
  },
  {
    id:4,
    title:"Easily Integrated",
    desc:"Unikaa 2.0 complete systems, with all the charting Tools, algorithms, Trade manager and safety capabilities they need to get right to work."
  },
]

function About() {
  return (
    
    <main>
      <Page page="page"/>
      <section className='bg-gray-100 md:flex'> 
        <div className='w-1/2 py-6 ml-16'>
          <img src={aboutImg} alt="" />
        </div>
        <div className='w-1/2 pt-6 mr-10'>
          <h1 className='text-3xl font-bold text-blue-500 '>We help you to get your best Work Done.</h1>
          <p className='pt-10 text-lg '>We are a team of technical experts with experience in software development and the Indian stock market for more than 15 years. Our strength is in the field of strategy development with the capability of understanding different market conditions
            has helped us forge our place as frontiers in the Stocks, Commodity, Currency market.</p>
          <p className='pt-5 text-lg'>Unikaa also has Rich of experience & talented trainers. We train you on how to analyze the market with smart technical indicators in a simple way. You can easily make a huge profit by yourself. Unikaa software is the right guide to achieve this mark. After many hurdles, we are proud to say that we created complete
            trader friendly software that can be the best guide for beginner as well as a professional.</p>
          <button className='p-3 m-3 text-white bg-blue-500 px-7 rounded-3xl'>Apply Demo</button>
        </div>
        
      </section>
      <Legacy/>
      <section className='relative w-full pt-3 bg-blue-400 bg-no-repeat bg-cover bg-gradient-to-tr from-blue-500 to-blue-200' >
          {/* <img className='absolute z-0 object-cover w-full h-full' src={hero1} alt="" /> */}

        <div className='z-20'>
          <h1 className='text-3xl font-bold text-center text-white '>WHAT MAKES UNIKAA ROBOTS DIFFERENT</h1>
          <div className='z-20 items-center justify-center grid-cols-2 px-20 m-6 md:grid'>
            {features.map((features)=>(
              <div className='m-6 text-white'>
                <h1 className='text-2xl font-extrabold'>{features.title}</h1>
                <p className='pt-2 text-lg text-white text-blue-600'>{features.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
