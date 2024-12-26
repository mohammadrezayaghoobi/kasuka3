import React from 'react'

import { FaDribbble } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { BiTachometer } from "react-icons/bi";
import { IoEarthSharp } from "react-icons/io5";
import { BiSlideshow } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";

export default function ServicesItem(props) {
    return (
        <div className="servicesItem-container">
            <div className="servicesItem-iconBox">
                {
                    props.iconName === "dribble" ? <FaDribbble />
                        : props.iconName === "file" ? <FiFileText />
                            : props.iconName === "tachometer" ? <BiTachometer />
                                : props.iconName === "earth" ? <IoEarthSharp />
                                    : props.iconName === "slideshow" ? <BiSlideshow />
                                        : props.iconName === "archive" ? <BsArchive />
                                            : ""
                }
            </div>
            <div className="servicesItem-header">{props.heading}</div>
            <div className="servicesItem-text">{props.text}</div>
        </div>
    )
}
