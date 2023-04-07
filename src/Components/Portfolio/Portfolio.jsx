import React from 'react'
import styles from './Portfolio.modules.css'
import image1 from '../Images/cabin.png'
import image2 from '../Images/cake.png'
import image3 from '../Images/circus.png'
import image4 from '../Images/game.png'
import image5 from '../Images/safe.png'
import image6 from '../Images/submarine.png'
export default function Portfolio() {
  return <>
  <section id='portfolio'>
    <div className="container mb-2 pb-2">
        <h2 className='text-uppercase text-center'>portfolio</h2>
        <div className="port-line-space">
    <div className="port-line"></div>
    <div className="port-star-icon">
    <i class="fa-solid fa-star fa-2x"></i>
    </div>
    <div className="port-line"></div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4 mb-4 img1-box">
    <div className="port-box">
    <div className="port-layer">
      <i class="fa-solid fa-plus fa-5x icon"></i>
    </div>
    <img className='w-100 port-image' src={image1} alt="" />
    </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-5 img1-box">
    <div className="port-box">
    <div className="port-layer">
      <i class="fa-solid fa-plus fa-5x icon"></i>
    </div>
    <img className='w-100 port-image' src={image2} alt="" />
    </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-5 img1-box">
    <div className="port-box">
    <div className="port-layer">
      <i class="fa-solid fa-plus fa-5x icon"></i>
    </div>
    <img className='w-100 port-image' src={image3} alt="" />
    </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-5 img1-box">
    <div className="port-box">
    <div className="port-layer">
      <i class="fa-solid fa-plus fa-5x icon"></i>
    </div>
    <img className='w-100 port-image' src={image4} alt="" />
    </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-5 img1-box">
    <div className="port-box">
    <div className="port-layer">
      <i class="fa-solid fa-plus fa-5x icon"></i>
    </div>
    <img className='w-100 port-image' src={image5} alt="" />
    </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-5 img1-box">
    <div className="port-box">
    <div className="port-layer">
      <i class="fa-solid fa-plus fa-5x icon"></i>
    </div>
    <img className='w-100 port-image' src={image6} alt="" />
    </div>
    </div>

  </div>
    </div>
  </section>
  </>
}
