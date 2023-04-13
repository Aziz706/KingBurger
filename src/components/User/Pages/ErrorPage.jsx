import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h1>ErrorPage</h1>
        <NavLink to={"/sign-up"}>
            Go to Login page
        </NavLink> <br />
        <NavLink to={"/"}>
            Go to Homepage
        </NavLink> 
    </div>
  )
}

export default ErrorPage