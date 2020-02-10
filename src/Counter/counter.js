import React, {Component} from 'react';
import Counter2 from '../Counter2/counter2'

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  upCounter = () => {
    /* this.setState({
      counter: this.state.counter + 1
    }) */
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
  downCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render() {
    return (
      <React.Fragment>
        <h2>counter: {this.state.counter}</h2>
        <Counter2 ></Counter2>
        <button onClick={this.upCounter}>+</button>
        <button onClick={this.downCounter}>-</button>
      </React.Fragment>
    )
  }
}