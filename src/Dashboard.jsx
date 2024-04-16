import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const nagivate = useNavigate();
    const HandleLogion = () =>{
        nagivate("/admin")
    }   
  return (
    <div>
      Welcome to the admin Dashboard
      <button onClick={HandleLogion}>Logout</button>
    </div>
  )
}

export default Dashboard
