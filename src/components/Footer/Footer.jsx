import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer-39201">
<div className="container">
<div className="row">
<div className="col-md mb-4 mb-md-0">
<h3>Categories</h3>
<ul className="list-unstyled nav-links">
<li><NavLink to={"/pizzas"}>PIZZA</NavLink></li>
<li><NavLink to={"/desserts"}>DESSERTS</NavLink></li>
<li><NavLink to={"/ice-cream"}>ICE-CREAM</NavLink></li>
<li><NavLink to={"/burgers"}>BURGERS</NavLink></li>
<li><NavLink to={"/drinks"}>DRINKS</NavLink></li>
<li><NavLink to={"/fried-chicken"}>FRIED-CHICKEN</NavLink></li>
</ul>
</div>
<div className="col-md mb-4 mb-md-0">
<h3>ABOUT</h3>
<ul className="list-unstyled nav-links">
<li><a href="#">ABOUT US</a></li>
<li><a href="#">CLIENTS</a></li>
<li><a href="#">SERVICES</a></li>
<li><a href="#">BEST SELLERS</a></li>
<li><a href="#">BLOG</a></li>
<li><a href="#">CONTACT</a></li>
</ul>
</div>
<div className="col-md mb-4 mb-md-0">
<h3>Contacts</h3>
<ul className="list-unstyled nav-links">
<li><a href="#">MY COMPANY GLASGOW D04 89GR</a></li>
<li><a href="#">12345678901</a></li>
<li><a href="#">Legality</a></li>
<li><a href="#">7 DAYS A WEEK FROM 9:00 AM TO 7:00 PM</a></li>
</ul>
</div>
<div className="col-md-4 mb-4 mb-md-0">
<h3>Subscribe</h3>
<p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor ducimus doloremque earum ullam. Architecto voluptatum odio magni.</p>
<form action="#" className="subscribe">
<input type="text" className="form-control" placeholder="Enter your e-mail" />
<input type="submit" className="btn btn-submit" value="Send" />
</form>
</div>
</div>
<div className="row align-items-center">

<div className="col-12">
<div className="border-top my-4"></div>
</div>

   <div className="col-md-6">
<p><small>&copy; Aziz 2023 All Rights Reserved KingBurg.</small></p>
</div>
<div className="col-md-6 text-md-right">
<ul className="social list-unstyled">
<li><a href="#"><i className='bx bxl-facebook'></i></a></li>
<li><a href="#"><i className='bx bxl-twitter' ></i></a></li>
<li><a href="#"><i className='bx bxl-pinterest-alt' ></i></a></li>
<li><a href="#"><i className='bx bxl-instagram' ></i></a></li>
</ul>
</div> 

</div>
</div>
</footer>
  )
}

export default Footer