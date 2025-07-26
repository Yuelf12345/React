import { Component } from "react";
type Props = {};

type State = {
  count: number;
};
class LifeCycle extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default LifeCycle;