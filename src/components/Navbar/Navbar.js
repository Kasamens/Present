import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="Navbar">
          <Link className='links' to={"./"}>home</Link>
          <Link className='links' to={"./About"}>about</Link>
          <Link className='links' to={"./Gallery"}>gallery</Link>
          <Link className='links' to={"./Contact"}>contact</Link>
  </div>
);


export default Navbar;
