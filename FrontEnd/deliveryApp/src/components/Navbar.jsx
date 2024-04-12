import React from 'react';
import logo from '../assets/Screenshot 2024-04-11 151218.png';
import drop from '../assets/down-arrow.png';

function Navbar() {
  return (
    <>
      <div className='nav'>
        <div className="Navbar">
          <img src={logo} alt="" className='logo'/>
        </div>
        <div className='delivery'>
          Deliver to:
          <span className='place'>Mumbai, Bengaluru...</span>
        
        </div>
      </div>
      <div><hr className="line" /></div>
      <div className="nav2">
        <p className='p1'>search</p>
        <p className='p1'>offer</p>
        <p className='p1'>help center</p>
        <p className='p1'>login</p>
        <p className='p1'>cart</p>
      </div>
      <hr className='line2'/>

    </>
  );
}

export default Navbar;
