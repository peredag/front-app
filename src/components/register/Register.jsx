import React from 'react'
import './register.css'
import RegisterForm from '../registerform/Registerform'
import Image from '../image/Image'


export default function Register() {
  return (
    <div className='register'>
      <RegisterForm />
      <Image className='img-register' src='./images/img-register.png'/>
      



    </div>
  )
}
