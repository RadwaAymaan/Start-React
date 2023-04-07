import React from 'react'
import styles from '../Contacts/Contacts.modules.css'
export default function Contacts() {
  return <>
  <section id='contact'>
  <div className="container">
    <h2 className='text-uppercase text-center'>contact me</h2>
    <div className="contact-line-space">
    <div className="contact-line"></div>
    <div className="contact-star-icon">
    <i class="fa-solid fa-star fa-2x"></i>
    </div>
    <div className="contact-line"></div>
  </div>
  <div className="row">
    <div className="col-lg-8 mx-auto">
    <div className="input-box pb-4 mb-0">
        <label htmlFor="name">Name</label>
        <input type="text" className='form-control' placeholder='Name'/>
    </div>

    <div className="input-box pb-4 mb-0">
        <label htmlFor="name">Email Address</label>
        <input type="text" className='form-control' placeholder='Email Address'/>
  </div>

  
    <div className="input-box pb-4 mb-0">
        <label htmlFor="name">Phone Number</label>
        <input type="text" className='form-control' placeholder='Phone Number'/>
    </div>

    <div className="input-box pb-4 mb-0">
        <label htmlFor="name">Message</label>
      <textarea className='form-control' id="message" rows="5" placeholder='Message'></textarea>
    </div>
    <div className="button-box">
        <button className='btn' type='submit'>Send</button>
    </div>
  </div>
  </div>
  </div>
  </section>
  </>
}
