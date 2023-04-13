import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../redux/PizzaReducer'
import { NavLink } from 'react-router-dom'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';
import { useForm } from 'react-hook-form'

function Page(props) {

  const {handleSubmit, reset, register} = useForm()
  const [visible, setVisble] = useState(false)
  useEffect(() =>{
    props.getUsers()
}, [])

function open(params) {
  setVisble(true)
}
function close(params) {
  setVisble(false)
}

function addPost (data) {
  if (props.currentItem === "") {
 props.edPosts(data)
} else {
    props.addPosts(data)
}
}


  return (
    <div className='container w-100'>
      <div className="border w-100 p-3 my-4 bg-light text-dark">
        <NavLink className={"text-danger"} to={"/"}>
          <i class="bx bx-home-circle"></i>{" "}
        </NavLink>{" "}
        / Personal Info
      </div>

        <h2>Personal Info</h2>
        <div className="card-body w-100">{
        props.user.map(post => <div className='lead border p-2' key={post.id}>
          <h3>{post.username}</h3>
          <p>{post.email}</p>
          <button className='btn btn-danger' onClick={() => {
            props.delPosts(post.id)
            props.getUsers()
   localStorage.removeItem("token") 

          }}>delete</button>
          <button onClick={() => {
                            props.edPosts(post)
                            open() 
                            reset(post)}} className='btn btn-warning'>edit</button>
        </div>)
      }</div>
      <Rodal width={500} height={500} onClose={() => close()} visible={visible}>
        <form style={{zIndex: "101"}} className='my-4' onSubmit={
        handleSubmit((data) => {
          addPost(data)
          props.toggle()
          props.getUsers()
          reset()
           })}>
          <input placeholder='username' className='form-control w-75 my-2' {...register("username")} type="text" />
          <input placeholder='email' className='form-control w-75 my-2' {...register("email")} type="text" />

          <button onClick={() => close()} className='btn btn-success form-control w-75 my-3'>Submit</button>
        </form>
      </Rodal>

    </div>
  )
}

export default connect((state) => state.pizzaReducer, actions) (Page)
