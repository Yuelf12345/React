import React, { Component } from 'react'

export default class renderProps extends Component {
  render() {
    return (
      <div>
        <h2>renderProps</h2>
        <A render={(name) => <B name={name}/>}></A>
      </div>
    )
  }
}

class A extends Component {
  staet={name:'张三'}
  render() {
    const {name} = this.staet
    return (
      <div>A
        {this.props.render(name)}
      </div>
    )
  }
}
class B extends Component {
  render() {
    console.log('B',this.props);
    return (
      <div>B
        {this.props.name}
      </div>
    )
  }
}