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
                    <Card image= {require('../../images/egusi.jpg')} caption='Egusi'/>
                    <Card image= {require('../../images/akple.jpg')} caption='Akple'/>
                    <Card image= {require('../../images/banku.jpg')} caption='Banku'/>
                    <Card image= {require('../../images/chapati.jpg')} caption='Chapati'/>
                    <Card image= {require('../../images/fried rice.jpg')} caption='Fried Rice'/>
                    <Card image= {require('../../images/fries.jpg')} caption='Fries'/>
                    <Card image= {require('../../images/fufu.jpg')} caption='Fufu'/>
                    <Card image= {require('../../images/jollof.jpg')} caption='Jollof'/>
                    <Card image= {require('../../images/pizza.jpg')} caption='Pizza'/>
                    <Card image= {require('../../images/spaghetti.jpg')} caption='Spaghetti'/>
                    <Card image= {require('../../images/springrolls.jpg')} caption='Springrolls'/>
                    <Card image= {require('../../images/pancake.jpg')} caption='Pancake'/>
                </div>
        </div>        
        </>
    )
}

export default Gallery