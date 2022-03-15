import {React} from 'react';
import './Jumbotron.css';
import Banner from '../Banner/Banner';

const Jumbotron = () => (
  <div className="Jumbotron">
    <Banner/>
    <span id='image-group'>
      <img src={require('../../images/pancake.jpg')}/>
      <img src={require('../../images/pancake.jpg')}/>
      <img src={require('../../images/pancake.jpg')}/>
      <img src={require('../../images/pancake.jpg')}/>
      <img src={require('../../images/pancake.jpg')}/>
    </span>
  </div>
);

export default Jumbotron;
