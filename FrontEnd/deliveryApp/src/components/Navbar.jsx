import React from 'react';
import logo from '../assets/Screenshot 2024-04-11 151218.png';
import Home from './Home';

import price from '../assets/price.svg';
import filter from '../assets/filter.svg';

import search from '../assets/search.svg';
import offer from '../assets/offer.svg';
import help from '../assets/help.svg';
import cart from '../assets/cart.svg';


function Navbar() {
 
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    console.log(scroll);
    const nav2 = document.querySelector(".nav2");
    const logo= document.querySelector(".logo2");
    if (scroll>13) {
      logo.style.display="block";
    }
    else{
      logo.style.display="none";
    }
    if (scroll > 10) {
      nav2.classList.add("nav2t");
    } else {
      nav2.classList.remove("nav2t");
    }
  });
  
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
      <hr className="line" />
      <div className="nav2">

      <img src={logo} alt="" className='logo2'/>

        <p className='p1'><img src={search} alt="" />Search</p>
        <p className='p1'> Offer</p>
        <p className='p1'><img src={offer} alt="" />   Help center</p>
        <p className='p1'><img src={help} alt="" />  Login</p>
        <p className='p1'><img src={cart} alt="" />  Cart</p>
      </div>
      <hr className='line2'/>
      <Home/>

      <div className="nav3">
        <div className="category1">CATEGORIES</div>
        <div className="category2">
          <p className='q'>VEG</p>
          <p className='q'>PRICE<img src={price} alt="" /></p>
          <p className='q1'><img src={filter} alt="" />FILTERS</p></div>
      </div>
      <hr className='line3'/>

      

    </>
  );
}

export default Navbar;
