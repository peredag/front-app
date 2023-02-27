import React from 'react'
import Navbar from '../navbar/Navbar'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <Navbar />
        <img className='logo' src='./images/logo.svg' /> 
        <img className='logo2' src='./images/logo2.png' /> 
    </div>
  )
}