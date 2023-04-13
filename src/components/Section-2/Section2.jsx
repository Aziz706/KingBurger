import React from "react";
import { NavLink } from "react-router-dom";
import "./Section2.css";


export const Section2 = () => {
 

  return (
    <div className="text-center">
      <div className="container d-flex flex-wrap">

      <div className="card2 ">
  <div className="card-body">
    <h5 className="card-title">PIZZA BUILDER</h5>
    <NavLink className="button btn btn-danger rounded-0 my-3">TRY BUILDER</NavLink>
  </div>
</div>

<div className="card-2">
  <div className="card-body-3 ">
    <h5 className="card-title ml-2">BURGER BUILDER</h5>
    <NavLink className="button btn btn-danger rounded-0 my-4">TRY BUILDER</NavLink>
  </div>
</div>

<div className="card-3">
  <div className="card-body-3">
    <h5 className="card-title">SUSHI BUILDER</h5>
    <NavLink className="button btn btn-danger rounded-0 ">TRY BUILDER</NavLink>
  </div>
</div>
      </div>
    </div>
  );
};
