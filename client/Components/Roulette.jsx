import React from 'react'
import Button1 from './Button1'
import aName from '../functions'
import { Link } from 'react-router-dom'

class Roulette extends React.Component {
  state = {
    ImgLink: 'animated-pizza.gif'
  }

  clickthing= () => {
<<<<<<< HEAD
    const ranNum = Math.floor(Math.random() * 3)
=======
    const ranNum = Math.floor(Math.random() * 8)
>>>>>>> d154788c3180c2cc22cfbe6c7c04bacb3ec11f77
    this.setState({
      ImgLink: aName[ranNum]
    })
  }

  render () {
    return (
      <>
      <div>
        <table>
          <thead>
            <tr>
              <th> <button className="button" onClick={this.clickthing}>Random RPizza</button></th>
              <th><Button1 /></th>
            </tr>
          </thead>
        </table>
        <img className="img" src={`/images/${this.state.ImgLink}`}/>
        <Link to='/'><button className='button'>Home Page</button></Link>
      </div>
      </>
    )
  }
}

export default Roulette
