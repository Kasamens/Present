import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="Navbar">
          <Link to={"./"}>home</Link>
          <Link to={"./About"}>about</Link>
          <Link to={"./Gallery"}>gallery</Link>
          <Link to={"./Contact"}>contact</Link>
  </div>
);


export default Navbar;
