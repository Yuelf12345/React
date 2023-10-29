import React, { Component } from 'react'

const MyContext = React.createContext()
const { Provider,Consumer } = MyContext


export default class context extends Component {
    state = { a: 'aaa' }
    render() {
        const {a} = this.state
        return (
            <div>
                <h2>Context:{a}</h2>
                <Provider value={a}>
                    <B />
                </Provider>
            </div>
        )
    }
}


class B extends Component {
    render() {
        return (
            <div>B:
                <C></C>
            </div>
        )
    }
}
// class C extends Component {
//     static contextType = MyContext
//     render() {
//         console.log(this.context);
//         return (
//             <div>C: {this.context}</div>
//         )
//     }
// }

const C = () =>{
    return (
        <div>
            C:
            <Consumer>
                {
                    value =>{
                        return `a:${value.a}`
                    }
                }
            </Consumer>
        </div>
    )
}