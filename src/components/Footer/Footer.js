import './Footer.css'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Banner from '../Banner/Banner'


const Footer = () =>{
    return(
        <div id='footer'>
            <span id='contact-details'>
                <p>+233244444245</p>
                <p>ambrosia@gmail.com</p>
            </span>

            <span id='footer-banner'>
                <Banner/>
            </span>
            <span id="social-icons">
                <FaTwitter></FaTwitter>
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
                <FaInstagram></FaInstagram>
            </span>
        </div>
    )
}

export default Footer