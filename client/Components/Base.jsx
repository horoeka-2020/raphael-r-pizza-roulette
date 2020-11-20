import React from 'react'

const Base = () => {
  return (
    <div className='baseHeader'>
      <h3>Pick your Base</h3>
      <input type="radio" id="plane" name="base" value="male"/>
      <label htmlFor="plane">plane</label>
      <input type="radio" id="red" name="base" value="female"/>
      <label htmlFor="red">red sause</label>
      <input type="radio" id="yellow" name="base" value="other"/>
      <label htmlFor="yellow">yellow sause</label>
    </div>
  )
}

export default Base
