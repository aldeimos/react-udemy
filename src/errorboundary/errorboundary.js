import React from 'react';
export default class ErorrBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>Smth goes wrong</h1>
      )
    }
    return this.props.children
  }
}