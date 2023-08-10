import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import Rating from './Rating';
export default function Product() {
  return (
    <div className='container'>
    <div className='card mb-3'>
  <img src="image/Laptop.jpg"class="card-img-top" alt="..." height={500 }/>
  <div class="card-body text-center">
    <h2 class="card-title"style={{color:"blueviolet" }}><b>Ansh Enterprises</b></h2>
    <h3 class="card-text">3300$</h3>
    <p class="card-text"><small class="text-muted"><b>Best Selling Laptop</b></small></p>
    <Rating/>

  </div>
  </div>
  </div>
  )
}