import React from 'react'
import './box.css'

export default function Box(props) {
  return (
    <div className="box-item">
        <img src={props.image} alt={props.text} className="box-image"/>
        <a className="box-text">{props.text}</a>
    </div>
  )
}
