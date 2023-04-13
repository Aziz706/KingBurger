import React from 'react'
import { NavLink } from 'react-router-dom'

function NonePage() {
  return (
    <div>
        <h1>404Page</h1>
        <NavLink className={"btn btn-danger w-50"} to={"/"}>
            Go to homePage
        </NavLink>
    </div>
  )
}

export default NonePage
