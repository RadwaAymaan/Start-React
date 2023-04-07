import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Navbar/Navbar.modules.css'
export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg text-uppercase fixed-top" style={{background:'#2c3e50', paddingTop:'0.75rem',paddingBottom:'0.75rem'}}>
  <div className="container d-flex justify-content-between align-items-center">
    <Link className="navbar-brand text-white fs-1" to={'/'} style={{paddingTop:'0.3125rem',paddingBottom:'0.3125rem',marginRight:'1rem'}}>start react</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav text-white">
        <li className="nav-item">
          <Link className="nav-link text-white" to="portfolio">portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="contacts">contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
