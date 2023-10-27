import React, { Component } from 'react'
import SetState from './components/setState'
import LazyLoad from './components/lazyLoad'
import Hooks from './components/hooks'

export default class App extends Component {
  render() {
    return (
      <div>
        <SetState sum={101} />
        <LazyLoad />
        <Hooks />
      </div>
    )
  } 
} 
