import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './component/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('App')
  )
})
