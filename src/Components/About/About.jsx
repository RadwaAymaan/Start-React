import React from 'react'
import styles from './About.modules.css'
export default function About() {
  return <>
  <section id='about'>
    <div className="container">
        <h2 className='text-center text-uppercase text-white'>ABOUT</h2>
    <div className="about-line-space">
    <div className="about-line"></div>
    <div className="about-star-icon">
    <i class="fa-solid fa-star fa-2x"></i>
    </div>
    <div className="about-line"></div>
  </div>
  <div className="row content-box">

    <div className="col-lg-4 about-box ml-auto">
        <p className='text-white about-para'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>

    <div className="col-lg-4 about-box mr-auto">
        <p className='text-white about-para'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
    </div>

  </div>
    </div>
  </section>
  </>
}
