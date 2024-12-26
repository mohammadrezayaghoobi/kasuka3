import React from 'react'
import TextBoxAdvertise from './TextBoxAdvertise.jsx'
import './advertise.css'

export default function Advertise() {
    return (
        <div className="advertise-container">
            <div className="container">
                <div className="advertise-boxLimited">
                    <div className="advertise-imageBox">
                        <img src="/features.jpg" alt="The Feature image" />
                    </div>
                    <div className="advertise-textBox">
                        <TextBoxAdvertise iconName="receipt" heading="تبلیغ سختی است" text="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند" />
                        <TextBoxAdvertise iconName="cube" heading="کدام یک از اینهاست" text="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند" />
                        <TextBoxAdvertise iconName="images" heading="یا کور شده است" text="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند" />
                        <TextBoxAdvertise iconName="shield" heading="حقیقت مبارک" text="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند" />
                    </div>
                </div>
            </div>
        </div>
    )
}
