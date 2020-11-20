import React from 'react'
import Button2 from './Button2'
import { Link } from 'react-router-dom'
import Base from './Base'
import Cheese from './Cheese'

class Create extends React.Component {
  state={
    temp: '',
    imageLink: 'pizza-in-an-oven-02.png'
  }
  changeHere= () => {
    this.setState({
      imageLink: this.state.temp
    })
  }
  whygod=e => {
    this.setState({
      temp: e.target.value
    })
  }
  render () {
    return (
      <>
      <div>
        <table>
          <thead>
            <tr>
              <th><button className="button"onClick={this.changeHere}>make your pizza</button></th>
              <th><Button2 /></th>
            </tr>
          </thead>
        </table>
        <img src={`/images/${this.state.imageLink}`}/>
        <Base/>
        <Cheese />
        <div className='header'>
          <h3>pick your toppings</h3>
          <input type="radio" id="meet" name="top" value="pizza-02.jpg" onChange={this.whygod}/>
          <label htmlFor="meet">meet</label>
          <input type="radio" id="things" name="top" value="pizza-01.png"onChange={this.whygod}/>
          <label htmlFor="things">meet and thing</label>
          <input type="radio" id="all" name="top" value="pizza-04.jpg"onChange={this.whygod}/>
          <label htmlFor="all">all the things</label>
        </div>
        <Link to='/'><button className='button'>Home Page</button></Link>
      </div>
      </>
    )
  }
}

export default Create
