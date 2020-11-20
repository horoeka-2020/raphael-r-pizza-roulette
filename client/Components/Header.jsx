import React from 'react'

const Header = () => {
  let audio = new Audio('/sound/R-is-silent.mp3')

  const start = () => {
    audio.play()
  }

  return (
    <>
    <div className='header'>
      <h1>Raphael <button onClick={start} className='header'>R</button>Pizza Roulette</h1>
    </div>
    </>
  )
}

export default Header
