import React, { createRef, useCallback, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import s from "../Section-3/Section3id.module.scss";

import { NavLink, useParams } from "react-router-dom";
import CustomizedAccordions from "./Accordion";
import "./Section8.scss"
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import { actions } from "../../redux/Drinks";



function Section8id(props) {
  const { id } = useParams();

  const fetchDetails = useCallback(() => {
    props.Loading(true);
    props.getDrink(id);

    props.Loading(false);
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

useEffect(() =>{
      props.getDrinks()
  }, [])

  const ShowProduct = () => {
    return (
      <>
        <div className={s.container}>
          <div className={s.row}>
            <div className="d-flex flex-wrap justify-content-between">
            <div className={s.image}>
                <img
                  src={props.drink.img}
                  style={{ width: "600px" }}
                  className="card-img-top mx-auto mt-3"
                  alt="market"
                />
              </div>
              <div className="card-body">
                <h3 className="text-left my-2">{props.drink.name}</h3>
                <hr /><br />
                <hr /><br />
                <div className={s.container2}>
                  <p className="">{props.drink.price}</p>
                </div><br /><br />
                <p style={{fontFamily: "monospace"}}>Available quantity : <br />100</p>
                <br />
                <hr />
                <div className="d-flex flex-wrap">
                  <NavLink
            style={{
              fontWeight: "lighter",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "15px",
              paddingBottom: "15px",
              fontWeight: "600"
            }}
            onClick={() => props.handleSave(props.drink)}
            className="btn btn-danger rounded-0"
          >
            ADD TO CART
          </NavLink>
          <NavLink
            style={{
              fontWeight: "lighter",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "15px",
              paddingBottom: "15px",
              fontWeight: "lighter",
              fontSize: "13px",
            }}
            className="btn btn-danger rounded-0"
          >
            ADD TO COMPARE
          </NavLink>
          <NavLink
            style={{
              fontWeight: "lighter",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "15px",
              paddingBottom: "15px",
              fontWeight: "lighter",
              fontSize: "13px",

            }}
            className="btn btn-danger rounded-0"
          >
            ADD TO WISHLIST
          </NavLink>
                </div>  
                <br />
                <hr />
                <div className="d-inline-flex gap-2">
                  <a href="#" className={s.fa + " " + s.facebook}><i class='bx bxl-facebook'></i></a>
<a href="#" className={s.fa + " " + s.twitter}><i class='bx bxl-twitter' ></i></a>
<a href="#" className={s.fa + " " + s.pinterest}><i class='bx bxl-pinterest-alt' ></i></a>
<a href="#" className={s.fa + " " + s.instagram}><i class='bx bxl-instagram' ></i></a>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  const RelatedProducts = () => {
    
  
  const slideLeft =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  
  const slideRight =()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }
    return (
      <div>
    <div className="redLine">
    <h2 style={{fontSize: "25px"}}>Related Products</h2>
    </div>
    
    <div id="main-slider-container">
      
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideRight}/>
      <div id={"slider"}>
      { 
          props.drinks.map((slide,index)=>{
                  return(
                      <div className="slider-card2" key={slide.id} onClick={()=>slide.clickEvent()}>
                          <div className="slider-card-image" style={{backgroundImage:`url(${slide.img})`, width: '220px'}}></div>
                          <p className="slider-card-title">{slide.name}</p>
                          <p className="slider-card-description">{slide.price} <br /> <NavLink to={`/drinks/${slide.id}`}>BUY NOW!</NavLink></p>

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

  return (
    <div className="container w-100">
      <div className="border w-100 p-3 my-4 bg-light text-dark">
        <NavLink className={"text-danger"} to={"/"}>
          <i class="bx bx-home-circle"></i>{" "}
        </NavLink>{" "}
        / {props.drink.name}
      </div>
      {props.loading ? (
        <div className="d-flex">
          <Skeleton width={600} height={500} count={1} />{" "}
          <Skeleton
            style={{ marginBottom: "30px" }}
            count={10}
            width={600}
            height={20}
          />
        </div>
      ) : (
        <div className="w-100">
        <ShowProduct />
        <CustomizedAccordions />
        <RelatedProducts />
        </div>
      )}
    </div>
  );
}

export default connect((state) => state.drinkReducer, actions)(Section8id);
