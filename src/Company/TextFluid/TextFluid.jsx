import React from 'react'
import iconFluid from './iconFluid.svg'
import './textFluid.css'

export default function TextFluid(props) {
  return (
    <div className="text-fluid">
        <img className="fluid-icon" src={iconFluid} alt="" />
        <p className="fluid-text">
            {props.text}
        </p>
    </div>
  )
}
