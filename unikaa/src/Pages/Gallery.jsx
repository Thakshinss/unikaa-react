import React from 'react'
import GalleryCom from '../components/GalleryCom'
import img1 from "../assets/gallery/gallerImg1.jpg"
import img2 from "../assets/gallery/galleryImg2.jpg"
import img3 from "../assets/gallery/gal3.jpg"
import img4 from "../assets/gallery/gal4.jpg"
import img5 from "../assets/gallery/gal5.jpg"
import Page from '../components/Page'


const galleryImages =[
  {
    img: img1
  },
  {
    img:img2
  },
  {
    img:img3
  },
  {
    img:img4
  },
  {
    img:img5
  },
]

function Gallery() {
  return (
    <div className="m-5 mt-10 ">
      <Page page="Gallery"/>
          <div>
            <GalleryCom galleryImages={galleryImages} />
          </div>
    </div>
  )
}

export default Gallery
