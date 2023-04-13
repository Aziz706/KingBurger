import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { actions } from "../redux/PizzaReducer";

function Basket(props) {
  function totalPrice() {
    let s = 0;
    for (let i = 0; i < props.basket2.length; i++) {
      s += Math.floor(props.basket2[i].price) * props.basket2[i].count;
    }
    return s;
  }
  const EmptyCart = () => {
    return (
      <div className="container w-100 my-5 text-center">
        <h3 className=" fw-bold">Shopping Cart</h3>
        <h4 >Cart is empty</h4>
        <NavLink style={{
              fontWeight: "lighter",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }} className="btn btn-danger rounded-0 my-5" 
            to={"/"}>Continue shopping</NavLink>
      </div>
    )
  }
  
  useEffect(() => {
    props.getPizzas()
  }, [])

  
  return (
    <div className="container w-100">
      <div className="border w-100 p-3 my-4 bg-light text-dark">
        <NavLink className={"text-danger"} to={"/"}>
          <i class="bx bx-home-circle"></i>{" "}
        </NavLink>{" "}
        / Shopping Cart
      </div>
      
        
          { props.basket2.length === 0 ? <EmptyCart /> : <table className="table">
        <h2>Basket</h2>
        <tbody> {props.basket2.map((item, index) => (
            <tr className="d-flex flex-wrap w-100" key={item.id}>
              <td>
                <img width={250} height={250} src={item.img} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{"$" + Math.floor(item.price) * item.count}</td>
              <td>
                <button
                  onClick={() => props.setCount(index)}
                  className="btn btn-dark"
                >
                  +
                </button>
                {item.count}
                <button
                  onClick={() => props.setCount2(index)}
                  className="btn btn-dark"
                >
                  -
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    props.delProduct(item.id);
                    toast.success('Product successfully deleted', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                      props.getPizzas()
                  }}
                  className="btn btn-danger"
                >
                  <i class="bx bxs-trash"></i>
                </button>
              </td>
            </tr>
          ))}</tbody>
          <div className="d-flex w-100 my-3 justify-content-between">
            <h2 className="w-100 mx-5">Total: {"$" + totalPrice()}</h2>
            <div className="d-flex w-25 "><button className="btn btn-outline-danger w-100">Order</button> </div>
          </div>
          
        
      </table>}
          
           <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  );
}

export default connect((state) => state.pizzaReducer, actions)(Basket);
