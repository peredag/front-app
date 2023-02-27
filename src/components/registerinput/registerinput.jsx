import React from 'react'

export default function registerinput({}) {
  return (
    <fieldset className='formA'>
        <legend>Name</legend>
        <label for="nombre">
          <input type="text"/>
        </label>
        <img class="imgA" src="./images/profile.png" alt=""/>
    </fieldset>
  )
}
