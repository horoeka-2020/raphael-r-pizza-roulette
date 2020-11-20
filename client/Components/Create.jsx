import React from 'react'
import Button2 from './Button2'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <>
    <div>
      <table>
        <thead>
          <tr>
            <th><button className="button">Not a button</button></th>
            <th><Button2 /></th>
          </tr>
        </thead>
      </table>

      <img src='/images/pizza-in-an-oven-02.png'/>
      <Link to='/'><button className='button'>Home Page</button></Link>
    </div>
    </>
  )
}

export default Create
