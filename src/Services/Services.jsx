import React from 'react'
import ServicesItem from './ServicesItem.jsx'

import './services.css'

export default function Services() {
    return (
        <div className="services-container">
            <div className="container">
                <div className="services-containerFluid">
                    <div className="services-header">
                        <h5 className="services-header-sm">خدمات</h5>
                        <h2 className="services-header-lg">خدمات مارا بررسی کنید</h2>
                    </div>
                    <div className="services-items">
                        <ServicesItem iconName="dribble" heading="لورم اپیسوم" text="برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد" />
                        <ServicesItem iconName="file" heading="اما همانطور که مشاهده می کنید" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
                        <ServicesItem iconName="tachometer" heading="دردهای بزرگ" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
                        <ServicesItem iconName="earth" heading="هیچکس دیگر" text="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم" />
                        <ServicesItem iconName="slideshow" heading="لولا را پاک کنید" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
                        <ServicesItem iconName="archive" heading="دیوا دان" text="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد" />
                    </div>
                </div>
            </div>
        </div>
    )
}
