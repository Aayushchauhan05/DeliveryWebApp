import React from 'react';
import "./Navbar.css";
import price from '../assets/price.svg';
import filter from '../assets/filter.svg';
import drop from '../assets/down-arrow.png';
export default function Home() {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide child" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active " data-bs-interval="10000">
            <img src="https://images.pexels.com/photos/20821489/pexels-photo-20821489/free-photo-of-eggs-in-a-basket.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block img" alt="" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://images.pexels.com/photos/20821505/pexels-photo-20821505/free-photo-of-a-cake-and-easter-eggs.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block" alt="" />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/20807274/pexels-photo-20807274/free-photo-of-carpaccio-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block" alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="nav3">
        <div className="category1">CATEGORIES</div>
        <div className="category2">
          <p className='q'>VEG</p>
          <p className='q'>PRICE<img src={price} alt="" /></p>
          <p className='q1'><img src={filter} alt="" />FILTERS</p></div>
      </div>
      <hr className='line3' />
      <div className='product-section'>


        <div className='left-section'>
          <h2>Categories</h2>
          <p> Veg</p>
          <p> Non-veg</p>
          <p> Breakfast</p>
          <p> Dinner</p>
          <p> Dinning</p>
        </div>


        <div className="scroll-box" >
          {/* <div class="card" style={{ width: "18rem;" }}>
            <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Chicken</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div> */}

          <div class="card">
  <div class="image_container">
   <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" className='image' />
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="action">
    <div class="price">
      <span>$299</span>
    </div>
    <button class="cart-button">
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>
<div class="card">
  <div class="image_container">
   <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" className='image' />
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="action">
    <div class="price">
      <span>$299</span>
    </div>
    <button class="cart-button">
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>
<div class="card">
  <div class="image_container">
   <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" className='image' />
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="action">
    <div class="price">
      <span>$299</span>
    </div>
    <button class="cart-button">
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>
<div class="card">
  <div class="image_container">
   <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" className='image' />
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="action">
    <div class="price">
      <span>$299</span>
    </div>
    <button class="cart-button">
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>
<div class="card">
  <div class="image_container">
   <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" className='image' />
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="action">
    <div class="price">
      <span>$299</span>
    </div>
    <button class="cart-button">
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>
<div class="card">
  <div class="image_container">
   <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" className='image' />
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>
  <div class="action">
    <div class="price">
      <span>$299</span>
    </div>
    <button class="cart-button">
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>

        </div>
      </div>
    </>
  );
}