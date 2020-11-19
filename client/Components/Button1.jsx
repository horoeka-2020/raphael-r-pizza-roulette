import React from 'react'
import { Link } from 'react-router-dom'

const Button1 = () => {
  return (
    <div >
      <Link to='/Create'><button className='button'>Create Ya RPizza</button></Link>
    </div>
  )
}

export default Button1
