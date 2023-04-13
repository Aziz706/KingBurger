import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'react-uuid';

export const SignUp = ({currentItem}) => {
    const { handleSubmit, reset, register} = useForm()
    const navigate = useNavigate()

    function submit(data) {
           if (data.password === data.password2){
           delete data.password2
            axios({
                url: "https://fakebackburgers.onrender.com/users",
                method: "POST",
                data: {...data, id: uuid()}
            }).then(res => {
                navigate("/sign-in")
            }) 
        } else {
            console.log("Xato!");
        }  
        
        
    }
  return (
    <div className='container w-100'>
        <div className="border w-100 p-3 my-4 bg-light text-dark">
        <NavLink className={"text-danger"} to={"/"}>
          <i class="bx bx-home-circle"></i>{" "}
        </NavLink>{" "}
        / Registration
      </div>
        <div className="card w-50 border-0 my-5 ">

            <h4 className='fw-bold'>
                Registration
            </h4>
            <div className="card-body w-100">
                <form id='form' onSubmit={handleSubmit(submit)}>
                    <input required={true} {...register("username")} placeholder='Username' className={"form-control w-100 p-2 rounded-0 my-2"} type={"text"} />
                    <input required={true} {...register("email")} placeholder='Email' className={"form-control w-100 p-2 rounded-0 my-2"} type={"email"} />
                    <input required={true} {...register("password")} placeholder='Password' className={"form-control w-100 p-2 rounded-0 my-2"} type={"password"} />
                    <input required={true} {...register("password2")} placeholder='Repeat password' className={"form-control w-100 p-2 rounded-0 my-2"} type={"password"} />
                </form>
            </div>
            <div className="w-100 d-flex gap-5 justify-content-between text-black">
                <button style={{backgroundColor: "#c00a27"}} className='btn btn-light text-white rounded-0' form='form'>Create account</button>
                <Link to="/sign-in">Already have account?</Link>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
