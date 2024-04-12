import React from 'react'
import "./Navbar.css"
export default function Home() {
  return (
    <>
        <div id="carouselExampleInterval" className="carousel slide child " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/20821489/pexels-photo-20821489/free-photo-of-eggs-in-a-basket.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block img" alt=""/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.pexels.com/photos/20821505/pexels-photo-20821505/free-photo-of-a-cake-and-easter-eggs.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/20807274/pexels-photo-20807274/free-photo-of-carpaccio-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block" alt=""/>
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
    </>
  )
}
