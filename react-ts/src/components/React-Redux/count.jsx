import React, { Component } from 'react'

export default class count extends Component {
    handleAdd = () => {
        this.props.dispatchAdd(4)
    }
    render() {
        console.log('ui组件接收到的参数', this.props);
        const count = this.props.count.count
        return (
            <div>
                <b>React-Redux</b> <br />
                <div>
                    {count}
                </div>
                <button onClick={this.handleAdd}>+4</button>
            </div>
        )
    }
}
