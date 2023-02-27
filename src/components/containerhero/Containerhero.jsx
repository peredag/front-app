import React from 'react'
import './containerhero.css'
import Image from '../image/Image'

export default function Containerhero() {
  return (
    <div className='container-hero'>
        <div className='container-1'>
            <Image className='img-1' src='./images/img-1.png' />
            <Image className='img-2' src='./images/img-2.png' />
            <div className='text-container'>
                <h2>One Piece</h2>
                <p className='text-1'>Manga</p>
                <p className='text-2'>Monkey D. Luffy refuses to let anyone stand in his way to become King of the Pirates. He launches into the seas and will become a captain willing to never give up until he gets hold of the greatest treasure in history: the legendary One Piece.</p>
            </div>

        </div>
        
        
    </div>
  )
}
