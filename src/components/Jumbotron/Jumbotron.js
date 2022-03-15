import {React,Image} from 'react';
import './Jumbotron.css';

const Jumbotron = () => (
  <div className="Jumbotron">
    <span id="banner">
      <h1>Ambrosia</h1>
      <h3>feast like a god</h3>
    </span>
    <span id='image-group'>
      <img src={require('../../images/pancake.jpg')}/>
      <img src={require('../../images/pancake.jpg')}/>
      <img src={require('../../images/pancake.jpg')}/>
      <img src={require('../../images/pancake.jpg')}/>
      <img src={require('../../images/pancake.jpg')}/>
    </span>
  </div>
);

Jumbotron.propTypes = {};

Jumbotron.defaultProps = {};

export default Jumbotron;
