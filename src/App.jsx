import Header from './Header/Header.jsx'
import AboutCompany from './Company/AboutCompany.jsx'
import Advertise from './Advertise/Advertise.jsx'
import Services from './Services/Services.jsx'
import Pain from './Services/Pain.jsx'
import Works from './Works/Works.jsx'
import Counts from './Counts/Counts.jsx'
import TeamCarousel from './TeamCarousel/TeamCarousel.jsx'
import Team from './Team/Team.jsx'
import ContactUs from './ContactUs/ContactUs.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
    return (
        <>
            <Header />
            <AboutCompany />
            <Advertise />
            <Services />
            <Pain />
            <Works />
            <Counts />
            <TeamCarousel teamName="ساول گودمن" rank="مدیران عامل:پایه گذار"/>
            <Team />
            <ContactUs />
            <Footer />
        </>
    )
}

export default App
