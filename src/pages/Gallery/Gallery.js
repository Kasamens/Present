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
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
        </div>        
        </>
    )
}

export default Gallery