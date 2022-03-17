import {React} from 'react';
import './Jumbotron.css';
import Banner from '../Banner/Banner';

const Jumbotron = () => (
  <div className="Jumbotron">
    <Banner/>
    <span id='image-group'>
      <img src={require('../../images/akple.jpeg')}/>
      <img src={require('../../images/banku.jpeg')}/>
      <img src={require('../../images/egusi.jpeg')}/>
      <img src={require('../../images/fufu.jpeg')}/>
      <img src={require('../../images/pizza.jpeg')}/>
    </span>
  </div>
);

export default Jumbotron;
