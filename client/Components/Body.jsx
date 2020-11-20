import React from 'react'

import Button1 from './Button1'
import Button2 from './Button2'
const Body = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th><Button1 /></th>
            <th><Button2 /></th>
          </tr>
        </thead>
      </table>
      <img className="img" src='/images/pizza-in-an-oven-01.gif'/>
    </div>
  )
}

export default Body
