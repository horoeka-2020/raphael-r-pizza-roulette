import React from 'react'
import Button1 from './Button1'
import aName from '../functions'

class Roulette extends React.Component {
  state = {
    ImgLink: 'base-01.png'
  }

  clickthing= () => {
    const ranNum = Math.floor(Math.random() * 10)
    this.setState({
      ImgLink: aName[ranNum]
    })
  }

  render () {
    return (
      <>
        <button onClick={this.clickthing}>Random RPizza</button>
         <img src={`/images/${this.state.ImgLink}`}/>
          <Button1 />
          </>
    )
  }
}

export default Roulette
