import React from 'react'
import './hero.css'
import Image from '../image/Image'
import Header from '../header/Header'
import Infohero from '../infohero/Infohero'
import Containerhero from '../containerhero/Containerhero'


export default function Hero() {
  return (
    <div>
        <Image className='background-hero' src='./images/Background-hero.png' />
        <Header />
        <Infohero />
        <Containerhero />
        
        
      
    </div>
  )
}
