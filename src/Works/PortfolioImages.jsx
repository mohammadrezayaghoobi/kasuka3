import React from 'react'

import './works.css'

function PortfolioImages(props) {
    return (
        <div className="works-body__picture">
            <img className="works-body__img" src={props.source} alt="The Images of Portfolio" />
        </div>
    )
}

export default PortfolioImages
