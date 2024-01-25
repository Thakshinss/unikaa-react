import React from 'react'
import productHeader from "../assets/product/product1.jpg"
import productbgImg from "../assets/product/product2.jpg"
import plan1 from "../assets/product/plan1.png"
import plan2 from "../assets/product/plan2.png"
import plan3 from "../assets/product/plan3.png"
const imageURL = 'https://unikaa.in/wp-content/themes/bank_cards_fintech/assets/images/Web_BG_Productpage.jpg' 

function Product() {
  return (
    <main>
      <section>
        <img src={productHeader} alt="" />
      </section>
      <section className='' style={{
            backgroundImage: `url(${imageURL})`,
          }}>
          <div className='items-center justify-between p-16 m-5 md:flex'>
            <div>
              <img src={plan1} alt="" />
              <button className='flex p-4 m-auto mt-2 bg-blue-400 rounded-md'>Buy now</button>
            </div>
            <div>
              <img src={plan2} alt="" />
              <button className='flex p-4 m-auto mt-2 bg-blue-400 rounded-md'>Buy now</button>
            </div>
            <div> 
              <img src={plan3} alt="" />
              <button className='flex p-4 m-auto mt-2 bg-blue-400 rounded-md'>Buy now</button>
            </div>
            </div>
        
      </section>
    </main>
  )
}

export default Product
