import './LandingPage.css'
import Services from "../../Components/services/Service";
import DrawerAppBar from "../../Components/navbar/Navbar";
import { useState } from 'react';
import LoginRegister from '../../Components/loginRegister/LoginRegister';
import About from '../../Components/about/About';
import FooterPart from '../../Components/footer/FooterPart';
import ContactUs from '../../Components/contactUs/Contact'

function LandingPage() {
    const [navBg, setNavBg] = useState(false);
    const changeBackground = () => {
        if (window.scrollY>=75) {
            setNavBg(true);
        }
        else {
            setNavBg(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            {
                navBg === true ? (
                    <>
                        <div className='ch'>
                            <DrawerAppBar />
                        </div>
                    </>

                ) : (
                    <>
                        <DrawerAppBar />
                    </>
                )
            }

            <Services />
            <LoginRegister/>
            <About/>
            <ContactUs/>
            <FooterPart/>

        </>
    )
}
export default LandingPage;