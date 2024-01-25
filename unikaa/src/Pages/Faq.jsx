import React from 'react';
import faqImg from "../assets/Faq.jpg"
import Page from '../components/Page';
const services = [
  {
    id:1,
    title:"Unikaa provides a free live demo? ",
    desc:"Yes, who are interested to see the life performance of Unikaa Technical Analysis & Buy Sell signal software before purchase."
  },
  {
    id:2,
    title:"Robo trade with cloud",
    desc:"We install Unikaa Robot trade Software and your trading terminals in a Cloud computer. It never shuts down. Whenever a trader wants to monitor the software, just log in through a computer or Android mobile."
  },
  {
    id:3,
    title:"Trade in All Markets",
    desc:"Unikaa Software works well in MCX, NSE Cash, Futures, Options and MCX SX Currency Segments. with one software Analysis best buy sell signal generating for Intra-day, Short Term, Positional trading."
  },
  {
    id:4,
    title:"Smart Indicators",
    desc:"Designed to accurately calculate market trends. This technology is designed to help you choose whether to buy or sell so that you can move in the right direction. "
  },
  {
    id:5,
    title:"Trailing Stop Loss",
    desc:"Unikaa main feature of the best and accurate technical analysis signal software is to protect your capital. The trailing stop loss is minimized your loss and capturing your profit."
  },
  {
    id:6,
    title:"Swing strategy",
    desc:" Designed to accurately calculate market trends. This technology is designed to help you choose whether to buy or sell, so that we can move in the right direction."
  }
]

function Faq() {
  return (
    <main>
      <Page page='Faq'/>
      <section className='flex flex-wrap justify-center gap-2 p-10 pr-5 bg-gray-100'>
        <div className='md:w-1/2' >
          <h1 className='mb-3 text-3xl font-extrabold text-blue-500'>To drive success for your business, you must define success in your client's</h1>
          <p className='text-lg text-gray-500'>Unikaa has Expansive knowledge of the trading technical product is an essential
             customer service skill. Ideally, we should believe in our product, be able to discuss 
             features and use cases in an insightful way, and show our valued customers
              how the product can profit.
            </p>
            <div className='mt-5'>
              <h1 className='text-2xl font-bold text-blue-500'>Create a community</h1>
              <p className='text-lg text-gray-500'>Getting connected and staying in touch with other traders provides a huge potential to grow.
                 unikaa are usually more than happy to share their trading ideas, tools, and overall experience.</p>
            </div>
            <div className='mt-5'>
              <h1 className='text-2xl font-bold text-blue-500'>Community Goal</h1>
              <p className='text-lg text-gray-500'>Unikaa brings traders together to help them achieve their goals. Opting to join such communities can help you make
                 educated trade decisions while learning from the real time trading experiences of others.</p>
            </div>
        </div>
        <div >
          <img  src={faqImg} alt="" />
        </div>
      </section>
      <section className='justify-between gap-4 mx-10 my-10 md:flex '>
        <div className='md:w-1/2'>
          <h2 className='pt-3 font-bold text-slate-500'>UNIKAA FEATURES</h2>
          <h1 className='text-3xl font-bold text-blue-600'>We are here to Increase your Profit.</h1>
          <p className='pt-5 text-lg text-slate-500'>The stock and commodity market has several trading platforms that <br />provide unlimited opportunities for traders. Before becoming<br /> involved in the world of trading and investments, you need to be <br />aware of risks management and money management.
             And with our<br /> best experience and knowledge, we offer you a highly successful<br /> technology.</p>
          <button className='p-3 pt-5 m-3 text-xl font-bold text-white bg-blue-500 px-7 rounded-3xl'>Know More</button>
        </div>
        
        <div className='md:w-1/2'>
          <div className='pb-10'>
            <h1 className='mb-3 text-2xl font-bold text-blue-500'>Innovative Approach</h1>
            <p className='text-lg text-slate-500'>Unikaa Innovative Approaches to Teaching is a practical 
              guide that helps to improve the profit trading quality and effectiveness.</p>
          </div>
          <div className='pb-10'>
          <h1 className='mb-3 text-2xl font-bold text-blue-500'>Quality time</h1>
            <p className='text-lg text-slate-500'>Unikaa automation technology saves you valuable time. The quality of time you dedicate to work is what determines your greatness.</p>
          </div>
          <div className='pb-10'>
            <h1 className='mb-3 text-2xl font-bold text-blue-500'>24/7 Support</h1>
            <p className='text-lg text-slate-500'>Providing 24/7 customer service has immense benefits for all types of queries. Unikaa knows
               why it is important to have around-the-clock customer support to build long-term relationships.</p>
          </div>
        </div>
        
      </section>
      <section className='p-10 pt-5 bg-gray-200 '>
          <div className='pb-10 text-center'>
            <p className='font-bold text-slate-500'>OUR SERVICES</p>
            <h1 className='text-3xl font-bold text-blue-600 '>Look our best Services</h1>
          </div>
          <div className='grid-cols-3 gap-4 px-16 md:grid'>
            {services.map((service)=>(
              <div key={service.id} className='p-8 text-center bg-white border-4 border-fuchsia-400'>
                <h1 className='pb-2 text-2xl font-bold text-blue-600 '>{service.title}</h1>
                <p className='pt-2 text-lg text-slate-500'>{service.desc}</p>
              </div>
            ))}
          </div>
      </section>
    </main>
  )
}

export default Faq
