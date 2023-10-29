import React, { PureComponent } from 'react'

export default class parent extends PureComponent {
    state = {
        name: '张三'
    }
    changeName = () => {
        this.setState({name:'李四'})
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);
    //     return !this.state.name === nextState.name
    // }

    render() {
        const { name } = this.state
        console.log('parent rander');
        return (
            <div>
                <h2>pureComponent</h2>
                姓名:{name}
                <button onClick={this.changeName}>切换</button>
                <Child name={name} />
            </div>
        )
    }
}


class Child extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);
    //     return !this.props.name === nextProps.name
    // }
    render() {
        console.log('child rander');

        return (
            <div>
                child
                {this.props.name}
            </div>
        )
    }
}