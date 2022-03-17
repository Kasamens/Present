import './Card.css'

const Card = (image) =>{
    return(
        <div id='card'>
            <img id="card-image" src= {image.image}/>
        </div>
    )
}

export default Card