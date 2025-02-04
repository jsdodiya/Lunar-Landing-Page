import React from 'react'

import { IoPlay } from "react-icons/io5";


const Hero = () => {
  return (
    <div>
        <div>
        <p>___ Innovation Requires Courages</p>
        <h1>Being Innovatores Requiares Courage</h1>
        <p>
            Understanding your capacity for risk can guide your business
            into untapped opportuinities, helping you navigate growth
        </p>
        <div>
            <button>Book</button>
            <button> <IoPlay /> <span>Video </span></button>
        </div>
    </div>
    <div>
    <img src="/hero.jpg" alt="Card Image" className="w-72 h-70 object-cover rounded-lg shadow-md" />

    </div>
    </div>
  )
}

export default Hero