import React from 'react'
import FilterButton from './FilterButton.jsx'
import PortfolioImages from './PortfolioImages.jsx'

import './works.css'

export default function Works() {

    let textFilters = ["برنامه", "محصول", "اینترنت"]
    let PortfolioImgs = [
        "/portfolio/portfolio-1.jpg", "/portfolio/portfolio-2.jpg",
        "/portfolio/portfolio-3.jpg", "/portfolio/portfolio-4.jpg",
        "/portfolio/portfolio-5.jpg", "/portfolio/portfolio-6.jpg",
        "/portfolio/portfolio-7.jpg", "/portfolio/portfolio-8.jpg",
        "/portfolio/portfolio-9.jpg"
    ]

    return (
        <section className="Works">
            <div className="container">
                <div className="works-head">
                    <h5 className="works-head__text">نمونه کارها</h5>
                    <h2 className="works-head__title">نمونه کارها ما را بررسی کنید</h2>
                </div>

                <div className="works-body">
                    <div className="works-body__filter">
                        <button className="fillter-btn active">همه</button>
                        {textFilters.map((textFilter) => <FilterButton text = {textFilter} />)}
                    </div>

                    <div className="works-body__pictures">
                        {PortfolioImgs.map((PortfolioImg) => <PortfolioImages source={PortfolioImg} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}
