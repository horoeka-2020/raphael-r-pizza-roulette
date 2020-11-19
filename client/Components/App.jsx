import React from 'react'
import Header from './Header'
import Button1 from './Button1'
import Button2 from './Button2'
import Body from './Body'
import Roulette from './Roulette'
import Create from './Create'
import {Route} from 'react-router-dom'

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
