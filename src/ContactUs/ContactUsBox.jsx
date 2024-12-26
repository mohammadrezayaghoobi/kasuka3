import React from 'react'
import './contactUs.css'

import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";

function ContactUsBox(props) {

    let i = 0;
    return (
        <div className="contactUs__box">
            <div className="contactUs__box-icon">
                {
                    props.icon === "geo" ? <BsGeoAlt />
                    :props.icon === "envelope" ? <BsEnvelope />
                    :props.icon === "phone" ? <BsPhone /> : "Not Found"
                }
            </div>
            <div className="contactUs__box-text">
                <h4 className="contactUs__box-title">{props.title}</h4>
                <p className="contactUs__box-p">{props.text}</p>
            </div>
        </div>
    )
}

export default ContactUsBox
