import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignIn = () => {
    const { handleSubmit, reset, register} = useForm()
    const navigate = useNavigate()

    function submit(data) {
        axios.get(`https://fakebackburgers.onrender.com/users?email=${data.email}`).then(res => {
            let user = res.data[0]
            console.log(user);
            if (user.password === data.password || user.email === data.email) {
                localStorage.setItem("token", user.id)
                toast.success("Xush Kelibsiz user")
                navigate("/users")
            }else {
                toast.error('Email or password is wrong', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    console.log("Xayo Password");
            }
        })
    }
    
  return (
    <div className='container w-100'>
        <div className="border w-100 p-3 my-4 bg-light text-dark">
        <NavLink className={"text-danger"} to={"/"}>
          <i class="bx bx-home-circle"></i>{" "}
        </NavLink>{" "}
        / Authorisation
      </div>
    <div className="card border-0 w-50 my-5 ">
    <h4 className='fw-bold'>
    Authorisation
            </h4>
        <div className="card-body w-100">
            <form id='form' onSubmit={handleSubmit(submit)}>
                <input required={true} {...register("email")} placeholder='Email' className={"form-control w-100 p-2 rounded-0 my-2"} type={"email"} />
                <input required={true} {...register("password")} placeholder='Password' className={"form-control w-100 p-2 rounded-0 my-2"} type={"password"} />
            </form>
        </div>
        <div className="w-100 gap-2 d-flex justify-content-between text-black">
        <button style={{backgroundColor: "#c00a27"}} className='btn btn-light text-white rounded-0' form='form'>Continue</button>
            <Link className='btn btn-light rounded-0' to="/sign-up">Create account</Link>
            <Link className='btn btn-light rounded-0' to="/forgot-password">Forgot password</Link>
        </div>
    </div>
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
  )
}
