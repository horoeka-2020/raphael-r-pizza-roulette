import React from 'react'

const Cheese = () => {
  return (
    <div className='cheeseHeader'>
      <h3>Pick your cheese</h3>
      <input type="radio" id="yellowcheese" name="cheese" value="male"/>
      <label htmlFor="yellowcheese">yellow cheese</label>
      <input type="radio" id="redcheese" name="cheese" value="female"/>
      <label htmlFor="redcheese">red cheese</label>
    </div>
  )
}

export default Cheese
