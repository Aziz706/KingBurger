import React, { createRef, useEffect } from 'react'
import { connect } from 'react-redux'

import "./Section7.scss"
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { actions } from '../../redux/Dessert';

function SectionDessert(props) {

  useEffect(() =>{
    props.getDesserts()
}, [])

const slideLeft =()=>{
  var slider = document.getElementById("slider5");
  slider.scrollLeft = slider.scrollLeft + 500;
}

const slideRight =()=>{
  var slider = document.getElementById("slider5");
  slider.scrollLeft = slider.scrollLeft - 500;
}

return(
  <div className='container w-100'>
    <div className="redLine">
      <div className="red-line"></div>
    <h2>Dessert</h2>
    </div>
    
    <div id="main-slider-container">
      
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideRight}/>
      <div id={"slider5"}>
         { 
          props.desserts.map((slide,index)=>{
                  return(
                      <div className="slider-card5" key={slide.id} onClick={()=>slide.clickEvent()}>
                          <div className="slider-card-image" style={{backgroundImage:`url(${slide.img})`,backgroundSize:'cover'}}></div>
                          <p className="slider-card-title">{slide.name}</p>
                          <p className="slider-card-description">{slide.price} <br /> <NavLink to={`/desserts/${slide.id}`}>BUY NOW!</NavLink></p>

                      </div>
                  )
              })
          }
      </div>
      <MdChevronRight size={40} className="slider-icon right" onClick={slideLeft} />
  </div>
  </div>
  
)
}


export default connect((state) => state.dessertReducer, actions) (SectionDessert)

                    