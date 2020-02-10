import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './car.css';


class Car extends Component {

  constructor(props) { // Всегда должны класть сюда пропсы
    super();
    this.state = {
      car: true
    }
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    console.log('Car render')
  
    const {name, year, onChangeName, onDeleteCar} = this.props
    return (
      <div className="car">
        <h3>Car name: {name}</h3>
        <p>
          <strong>CAR YEAR: {year}</strong>
        </p>
        {this.props.children}
        <input ref={this.inputRef} className="input" type="text" onChange={onChangeName} value={this.props.name}></input> {/* референции нужны для: свг, новых хтмл 5 тегов и для плагинов (etc jquery) */}
        <button onClick={onDeleteCar}>Удалить машину</button>
      </div>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDeleteCar: PropTypes.func
}

export default Car;