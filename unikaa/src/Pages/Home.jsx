import React from 'react';
import logo1 from "../assets/target.png"
import logo2 from "../assets/target2.png"
import logo3 from "../assets/values.png"
import hero4 from "../assets/home4.png"
import hero1 from "../assets/Home.jpg"
import Testimonial from '../components/Testimonial';

const vision =[
  {
    id:1,
    logo:logo1,
    name:"Vision",
    description:"Unikaa was formed keeping one mission in mind. To create trader friendly software. "
  },
  {
    id:2,
    logo:logo2,
    name:"Mission",
    description:"To be recognized as the best technical advisor of quality service in our trading community. "
  },
  {
    id:3,
    logo:logo3,
    name:"Core Values",
    description:"Be knowledgeable, Be Service Hearted, Strive for Excellence, Integrity, Be a Problem Solver, Passionate with a great attitude. "
  },
]
const plan = [
  {
    id:1,
    plan:"UNIKAA BASIC",
    rate:"4,000"
  },
  {
    id:2,
    plan:"UNIKAA CHOICE",
    rate:"11,000"
  },
  {
    id:3,
    plan:"UNIKAA PLUS",
    rate:"21,000"
  },
]
const imageURL = 'https://unikaa.in/wp-content/themes/bank_cards_fintech/assets/images/robo-content.png'
const image2 ='https://unikaa.in/wp-content/themes/bank_cards_fintech/assets/images/web_infographics.png'

function Home() {
  return (
    <main>
      <section className='relative w-full h-screen bg-green-100 bg-gradient-to-tr from-slate-500 to-gray-200 '>
        <img className='absolute object-cover w-full h-full' src={hero1} alt="" />
        <div className='flex p-24 justify-items-end'>
          <div className='z-20'>
          <h1 className='text-2xl font-extrabold text-white'>Risk free Trading Call</h1>
          <p className='text-white text-md md:text-xl font-lg pt-7'>No need of any prior Technical, Fundamental knowledge (just follow <br /> Unikaa Trade Software)., The generated buy sell signals analysis <br /> through most complex confirmation and filtering systems assures <br /> the generated buy sell signals have more than 95% accuracy, this will <br /> help every trade to trade with protected capital.
                                  </p>
          <button className='p-4 mt-5 text-white border rounded-full'>Click for Demo</button>
          </div>
          
        </div>
      </section>
      <section className='p-10 bg-gray-100 '>
        <div className='flex-wrap items-center justify-around md:flex'>
          {vision.map((vision)=>(
          <div key={vision.id} className='p-10 mb-3 bg-white rounded-lg md:w-1/4 h-74'>
            <div className='flex items-center gap-6 justify-left' >
              <img src={vision.logo} alt="" />
              <h1 className='text-3xl font-extrabold text-blue-500'>{vision.name}</h1>
            </div>
            <p className='pt-10 text-lg'>{vision.description}</p>
          </div>
          ))}
        </div>
        <div className='flex-wrap items-center justify-between pt-6 md:flex'>
          <div className='px-10 pt-5'> 
            <h1 className='text-3xl font-extrabold text-blue-500'>Welcome to Unikaa</h1>
            <p className='pt-5 text-lg'> Unikaa Technical Analysis software works on charting platform.</p>
            <p className='pt-5 pb-5 text-lg'>Unikaa Software is the leading brand in the stock market charting and technical <br /> analysis,
              for self-directed traders in Indian markets. This buy sell signal software,<br />
                developed by professionals for Indian markets.</p>
            <button className='p-3 m-3 text-xl font-bold text-white bg-blue-500 px-7 rounded-3xl'>Learn More</button>
          </div>
          <div >
            <img className='w-full' src={hero4} alt="" />
          </div>
        </div>
      </section>
      <div className='flex-wrap items-center justify-center gap-3 bg-red-500 md:flex'>
        <h1 className='py-6 text-3xl font-extrabold text-white'>Best Robo Trade Software</h1>
        <button className='py-3 mb-3 text-xl font-bold text-blue-700 rounded-full px-7 bg-slate-50'>Apply for Demo</button>
      </div>
      <div className='flex items-center justify-center pt-10' style={{
            backgroundImage: `url(${image2})`,
          }} >
        <img src={imageURL} alt="" />
      </div>
      <div className='p-10' style={{
            backgroundImage: `url(${image2})`,
          }}>
        <h1 className='text-3xl font-extrabold text-center text-blue-600'>Product plans</h1>
        <div className='justify-around pt-6 md:flex'>
          {plan.map((plan)=>(
            <div className='py-6 mx-10 mb-3 text-center rounded-lg bg-gradient-to-tr from-blue-500 to-red-500 md:w-1/4'>
              <h1 className='text-xl font-bold text-center bg-slate-50'>{plan.plan}</h1>
              <h2 className='pt-6 text-2xl font-bold'>Free Strategies</h2>
              <h1 className='px-4 pb-6 text-3xl font-bold'>Worth Rs:{plan.rate}</h1>
              <button className='px-3 py-1 font-bold text-blue-600 bg-white border border-blue-500'>View More</button>
            </div>
          ))}
        </div>
      </div>
      <Testimonial/>

    </main>
  )
}

export default Home
