import React from 'react'
import './sliderCompany.css'

export default function SliderCompany() {
  return (
    <div className="slider-company">
        <div className="company-imgSlider">
            <img src="./src/assets/img/clients/client-1.png" alt="Images Slider" className="company-pictureSlide" />
            <img src="./src/assets/img/clients/client-2.png" alt="Images Slider" className="company-pictureSlide" />
            <img src="./src/assets/img/clients/client-3.png" alt="Images Slider" className="company-pictureSlide" />
            <img src="./src/assets/img/clients/client-4.png" alt="Images Slider" className="company-pictureSlide" />
            <img src="./src/assets/img/clients/client-5.png" alt="Images Slider" className="company-pictureSlide" />
            <img src="./src/assets/img/clients/client-6.png" alt="Images Slider" className="company-pictureSlide" />
        </div>
        <div className="company-proccessBar">
            <span className="proccessBar-circle"></span>
            <span className="proccessBar-circle"></span>
            <span className="proccessBar-circle"></span>
            <span className="proccessBar-circle"></span>
            <span className="proccessBar-circle"></span>
            <span className="proccessBar-circle active"></span>
            <span className="proccessBar-circle"></span>
            <span className="proccessBar-circle"></span>
        </div>
    </div>
  )
}
