import React from 'react'
import { Link } from 'react-router-dom'

const Button1 = () => {
  return (
    <div className='button1'>
      <Link to='/Create'><button>Create Ya RPizza</button></Link>
    </div>
  )
}

export default Button1
