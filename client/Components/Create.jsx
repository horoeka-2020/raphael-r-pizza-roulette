import React from 'react'
import Button2 from './Button2'
import { Link } from 'react-router-dom'
import Cheese from './Cheese'
import Base from './Base'

class Create extends React.Component {
  render () {
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
        <Base/>
        <Cheese />
        <div className='createHeader'>
          <h3>pick your toppings</h3>
          <input type="radio" id="meet" name="top" value="male"/>
          <label htmlFor="meet">meet</label>
          <input type="radio" id="things" name="top" value="female"/>
          <label htmlFor="things">meet and thing</label>
          <input type="radio" id="all" name="top" value="other"/>
          <label htmlFor="all">all the things</label>
          <Link to='/'><button className='homeButton'>Home Page</button></Link>
        </div>
      </div>
      </>
    )
  }
}

export default Create
