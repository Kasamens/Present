import './Gallery.css'
import Banner from '../../components/Banner/Banner'

import Card from "../../components/Card/Card"


const Gallery = () => {
    return(
        <>
        <div id='layout'>
            <div id='gallery-banner'>
                <Banner/>
            </div>
                <div id='gallery'>
                    <Card image= {require('../../images/egusi.jpeg')} caption='Egusi'/>
                    <Card image= {require('../../images/akple.jpeg')} caption='Akple'/>
                    <Card image= {require('../../images/banku.jpeg')} caption='Banku'/>
                    <Card image= {require('../../images/chapati.jpeg')} caption='Chapati'/>
                    <Card image= {require('../../images/fried rice.jpeg')} caption='Fried Rice'/>
                    <Card image= {require('../../images/fries.jpeg')} caption='Fries'/>
                    <Card image= {require('../../images/fufu.jpeg')} caption='Fufu'/>
                    <Card image= {require('../../images/jollof.jpeg')} caption='Jollof'/>
                    <Card image= {require('../../images/pizza.jpeg')} caption='Pizza'/>
                    <Card image= {require('../../images/spaghetti.jpeg')} caption='Spaghetti'/>
                    <Card image= {require('../../images/springrolls.jpeg')} caption='Springrolls'/>
                    <Card image= {require('../../images/pancake.jpg')} caption='Pancake'/>
                </div>
        </div>        
        </>
    )
}

export default Gallery