import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Axios from '../Axios'

function User() {
  const location = useLocation()
  const blockedPages = ["/users"]
  const navigate = useNavigate()

  const [user, setUser] = useState([])


  useEffect(() => {
    getUser()
  }, [location.pathname])

  function getUser(params) {
    let tok = localStorage.getItem("token")
    if (blockedPages.includes(location.pathname)) {
      if(tok === null) {
        navigate('/error')
    } else {
        let tf = true
        setTimeout(() => {
          navigate("/sign-in")
        }, "6000000");
        Axios('/users').then(({data})=>{
            for(let i = 0 ; i<data.length ; i++){
                if(data[i].id===tok){
                    tf=false
                }
            }
            setUser(data)
            if(tf){
                navigate('/error')
            }
        })
    }
    }
  }
}

export default User