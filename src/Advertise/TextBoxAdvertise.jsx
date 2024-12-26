import React from 'react'
import './advertise.css'

import { BiCubeAlt } from "react-icons/bi";
import { BiReceipt } from "react-icons/bi";
import { BiImages } from "react-icons/bi";
import { IoShieldOutline } from "react-icons/io5";

export default function TextBoxAdvertise(props) {
    return (
        <div className="textBox-container">
            <div className="textBox-icon">
                {props.iconName === "receipt" ? <BiReceipt />
                : props.iconName === "cube" ? <BiCubeAlt />
                : props.iconName === "images" ? <BiImages />
                : props.iconName === "shield" ? <IoShieldOutline /> : ""}
            </div>
            <div className="textBox-texts">
                <h3 className="texts-header">{props.heading}</h3>
                <p className="texts-text">{props.text}</p>
            </div>
        </div>
    )
}
