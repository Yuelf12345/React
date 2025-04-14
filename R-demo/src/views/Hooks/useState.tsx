// 类式组件
// import { Component } from "react";

// interface StateInterface {
//   count: number;
// }

// interface StateProps {}

// class State extends Component<StateProps, StateInterface> {
//   constructor(props: StateProps) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.incrementCount = this.incrementCount.bind(this);
//   }

//   incrementCount() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Page2_1 - Counter: {this.state.count}</h1>
//         {/* 添加一个按钮来触发计数增加 */}
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// export default State;

// 函数式组件
import React, { useState } from 'react';

const State: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Page2_1 - Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default State;