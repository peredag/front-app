//import React from 'react'
import { useRef } from 'react'
import './registerform.css'
import Image from '../image/Image'
import axios from 'axios' //npm axios

export default function RegisterForm() {
    let name = useRef()
    let mail = useRef()
    let password = useRef()
    let confirmpass = useRef()

    async function handleSubmit(event) {
        event.preventDefault()

        let data = {
            [name.current.name]: name.current.value,
            [mail.current.name]: mail.current.value,
            [password.current.name]: password.current.value,
            [confirmpass.current.name]: confirmpass.current.value,
        }
        console.log(data)
        let url = 'http://localhost:8000/users'
        try {
            await axios.post(   //npm axios ---aca lo que viene es una PROMESA RECORDAR
                url,    /* URL del endpoint para crear una categoria */
                data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
            )
        } catch (error) {
            console.log(error)
            console.log('ocurrio un error')
        }
    }

    return (

        <form className="form-container" onSubmit={handleSubmit}>

            <div className="logo">
                <img className="logoF" src="./images/logo.svg" alt="logo" />
                <img className="logoF" src="./images/logo2.png" alt="logo" />
            </div>

            <div className="title-form">
                <h2>Welcome! </h2>
                <p className="pText"> Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
            </div>
            <fieldset>
                <legend>
                    <h3 className="tituloForm">Name</h3>
                </legend>
                <label htmlFor="name"></label>
                <input ref={name} type="text" id="name" name="name" required />

                <img className="img-f" src="./images/profile.png" alt=""></img>
            </fieldset>
            <fieldset>
                <legend>
                    <h3 className="tituloForm">Email</h3>
                </legend>
                <label htmlFor="mail"></label>
                <input ref={mail} type="mail" id="mail" name="mail" required />

                <img class="imgA" src="./images/@.png" alt=""></img>
            </fieldset>
            <fieldset>
                <legend>
                    <h3 className="tituloForm">Password</h3>
                </legend>
                <label htmlFor="password"></label>
                <input ref={password} type="password" id="password" name="password" required />

                <img class="imgA" src="./images/lock1.png" alt=""></img>
            </fieldset>
            <fieldset>
                <legend>
                    <h3 className="tituloForm">Confirm Password </h3>
                </legend>
                <label htmlFor="confirmpass"></label>
                <input ref={confirmpass} type="password" id="confirmpass" name="confirmpass" required />

                <img class="imgA" src="./images/lock1.png" alt=""></img>
            </fieldset>
            <div className="checkRegister">
                <input className="check" type="checkbox" value="checkbox" />
                <p className="textCheck">Send notification to my email</p>
            </div>
            <input type="submit" className="butonSinginup" value="Sign Up" id="enviar" />
            <button className="botongoogle">

                <img class="imgA" src="./images//Google.png" alt=""></img>
                <h3>Sign in whit Google</h3>
            </button>
            <p>Already have an account? <a className="login" href="https//:www.google.com">Log in</a></p>
            <p>Go back <a className="login" href="./App.jsx">Home Page</a></p>
            
        </form>




    )
}
