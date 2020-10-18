import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from './components/Books'

export class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Books} />
      </Router>
    )
  }
}

export default App
