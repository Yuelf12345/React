import React, { Component } from 'react'
interface SumProps {
  sum: Number
}

/**
 * 对象式是函数式语法糖
 * 新状态不依赖原来的状态 --> 对象式  this.setState({count:99})
 * 
 */

export default class SetStateDemo extends Component<SumProps> {
  state = { count: 0 }
  handleAdd = () => {
    // 对象式
    const { count } = this.state
    this.setState({ count: count + 1 }, () => {
      console.log('回调内打印', this.state.count); // 异步更新
    })
    console.log('外部打印', this.state.count); // 异步更新
  }

  handleDec = () => {
    // 函数式
    this.setState((state: any, props) => {
      console.log(state, props);
      return { count: state.count - 1 }
    }, () => {
      console.log('回调内打印', this.state.count); // 异步更新
    })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h2>SetState</h2>
        <div> 当前值:{count}</div>
        <button onClick={this.handleDec}>-1</button>
        <button onClick={this.handleAdd}>+1</button>
      </div>
    )
  }
}