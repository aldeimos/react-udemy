import React, {Component} from 'react';
import Radium from 'radium';
import './car.css';


class Car extends Component {

  constructor(props) { // Всегда должны класть сюда пропсы

  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) { // Здесь оптимизируется приложение. Если возвращает true - компонент перерисовывается, если вернем false - ререндер не нужен (добавляются проверки)
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('Car render')
    const inputClasses = ['input'];
    if (this.props.name !== '') {
      inputClasses.push('success')
    } else {
      inputClasses.push('warning')
    }
    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }
    const styles = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
      ':hover': {
        border: '1px solid orange',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)'
      }
    }
    const {name, year, onChangeName, onDeleteCar} = this.props
    return (
      <div style={styles} className="car">
        <h3>Car name: {name}</h3>
        <p>
          <strong>CAR YEAR: {year}</strong>
        </p>
        {this.props.children}
        <input className={inputClasses.join(' ')} type="text" onChange={onChangeName} value={this.props.name}></input>
        <button onClick={onDeleteCar}>Удалить машину</button>
      </div>
    )
  }
}

export default Car;