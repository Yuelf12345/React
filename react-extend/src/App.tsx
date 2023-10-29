import React, { Component } from 'react'
import SetState from './components/setState'
import LazyLoad from './components/lazyLoad'
import Hooks from './components/hooks'
import Context from './components/context'
import PureCom  from './components/pureComponent.jsx'
import RenderProps  from './components/renderProps.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <SetState sum={101} />
        <LazyLoad />
        <Hooks />
        <Context />
        <PureCom />
        <RenderProps />
      </div>
    )
  } 
} 
