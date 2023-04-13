import React from 'react'
import { NavLink } from 'react-router-dom'

function NonePage() {
  return (
    <div>
        <h1>404Page</h1>
        <NavLink to={"/"}>
            Go to homePage
        </NavLink>
    </div>
  )
}

export default NonePage