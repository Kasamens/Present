import './Card.css'

const Card = () =>{
    return(
        <div id='card'>
            <img id="card-image" src= {require('../../images/pancake.jpg')}/>
            <p>Egusi for the pain</p>
        </div>
    )
}

export default Card