import React from 'react'
import logo from '../Images/avataaars.svg'
import styles from '../Home/Home.modules.css'

export default function Home() {
  return <>
  <header id='home'>
  <div className="container box">
  <img src={logo} className='mb-5 home-img' alt="Logo"/>
  <h1 className='text-uppercase text-white home-header'>START REACT</h1>
  <div className="home-line-space">
    <div className="home-line"></div>
    <div className="home-star-icon">
    <i class="fa-solid fa-star fa-2x"></i>
    </div>
    <div className="home-line"></div>
  </div>
  <p className='home-para'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  </header>
  </>
  
}
