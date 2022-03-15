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
                    <img src= {require('../../images/pancake.jpg')}/>
                </div>
                <div class='card' id='services-card'>
                    <h2>SERVICES</h2>
                </div>
            </div>
        
        </div>
    )
}

export default About