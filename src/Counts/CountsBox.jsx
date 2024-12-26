import React from 'react'
import './counts.css'

import { CiFaceSmile } from "react-icons/ci";
import { BsJournalRichtext } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { BsAward } from "react-icons/bs";

function CountsBox(props) {
    return (
        <div className="counts__box">
            <div className="counts__box-head">
                {
                    props.icon_box === "smile" ? <CiFaceSmile />
                        : props.icon_box === "richtext" ? <BsJournalRichtext />
                            : props.icon_box === "clock" ? <GoClock />
                                : props.icon_box === "award" ? <BsAward /> : ""
                }
                <h5 className="counts__counter">{props.counter}</h5>
            </div>

            <div className="counts__box-text">{props.text}</div>
        </div>
    )
}

export default CountsBox
