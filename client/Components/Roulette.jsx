import React from 'react'
import Button1 from './Button1'
import aName from '../functions'

class Roulette extends React.Component {
  state = {
    ImgLink: 'base-01.png'
  }

  clickthing= () => {
    const ranNum = Math.floor(Math.random() * 14)
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
      </div>
      </>
    )
  }
}

export default Roulette
