import {React} from 'react';
import './Jumbotron.css';
import Banner from '../Banner/Banner';

const Jumbotron = () => (
  <div className="Jumbotron">
    <Banner/>
    <span id='image-group'>
      <img src={require('../../images/akple.jpg')}/>
      <img src={require('../../images/banku.jpg')}/>
      <img src={require('../../images/egusi.jpg')}/>
      <img src={require('../../images/fufu.jpg')}/>
      <img src={require('../../images/pizza.jpg')}/>
    </span>
  </div>
);

export default Jumbotron;
