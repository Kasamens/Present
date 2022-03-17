import './About.css'
import Banner from "../../components/Banner/Banner"

function About(){
    return(
        <div class='container'>
            <div id='about-banner'>
                <Banner/>
            </div>
            <div id='card-group'>
                <div class='card' id='menu-card'>
                    <h2>MENU</h2>
                    <br></br>
                    <div class="menu-item">
                        <span>Pizza</span>
                        <span>$50</span>
                    </div>
                    <div class="menu-item">
                        <span>Pizza</span>
                        <span>$50</span>
                    </div>
                    <div class="menu-item">
                        <span>Pizza</span>
                        <span>$50</span>
                    </div>
                    <div class="menu-item">
                        <span>Pizza</span>
                        <span>$50</span>
                    </div>
                    <div class="menu-item">
                        <span>Pizza</span>
                        <span>$50</span>
                    </div>
                    <div class="menu-item">
                        <span>Pizza</span>
                        <span>$50</span>
                    </div>
                    <div class="menu-item">
                        <span>Pizza</span>
                        <span>$50</span>
                    </div>
                    
                </div>
                <div class='card' id='welcome-card'>
                    <h2>WELCOME</h2>
                    <br></br>
                    <img src= {require('../../images/chapati.jpg')}/>
                    <p>We provide a vast array of divine dishes prepared 
                        by exquisite world-class chefs from all over the world.
                        Fill your belly with nourishment fit for gods.
                    </p>
                </div>
                <div class='card' id='services-card'>
                    <h2>SERVICES</h2>
                    <br></br>
                    <ul>
                        <li>Transport Catering</li>
                        <li>Airline Services</li>
                        <li>Ship Services</li>
                        <li>Surface Catering</li>
                        <li>Outdoor Parties</li>
                        <li>Retail Store Catering</li>
                        <li>Club Catering</li>
                        <li>Welfare Catering</li>
                        <li>Industrial Catering</li>
                    </ul>
                </div>
            </div>
        
        </div>
    )
}

export default About