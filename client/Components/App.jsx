import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Body from './Body'
import Roulette from './Roulette'
import Create from './Create'
class App extends React.Component {
  render () {
    return (
    <>
    <Header />
     <Route exact path='/' component={Body}/>
     <Route path='/roulette'component={Roulette}/>
     <Route path='/Create' component={Create} />
    </>
    )
  }
}
export default App
