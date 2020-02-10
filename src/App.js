import React, {Component} from 'react';
import Car from './Car/Car'
import './App.css';
import ErorrBoundary from './errorboundary/errorboundary';
import Counter from './Counter/counter';

export const ClickedContext = React.createContext(false);

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      cars: [
        {name: 'Ford', year: 2020},
        /* {name: 'Mazda', year: 2015},
        {name: 'Volvo', year: 2018}, */
      ],
      pageTitle: 'React Components',
      showCars: false,
      clicked: false
    } 
    // Вызывается один раз
    /* Можно:
      - Устанавливайте изначальное состояние компонента
      - Если не используется class properties синтаксис – подготовьте все поля класса и вызовете bind на тех функциях, что будут переданы как коллбеки.
    */
    /* Нельзя:
      Не выполняйте никаких сайд-эффектов (side effects) (Вызовы AJAX и т.д.)
    */
  }

  onChangeName(name, index) {
    const {cars} = this.state;
    const newArray = cars.map((car) => {
      return Object.assign({}, car);
    })
    const car = newArray[index];
    car.name = name;
    this.setState({
      cars: newArray
    })
  }
  
  deleteCars = (id) => {
    const cars = this.state.cars.slice();
    cars.splice(id, 1)
    this.setState({
      cars,
    })
  }

  handleInput = (evt) => {
    this.setState({
      pageTitle: evt.target.value
    })
  }

  toggleCars = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  componentWillMount() {
    console.log('App componentWillMount')
    // 1. Вызывается в тот момент, когда произошла инициализация компонента, он принял пропсы и он готов к render
    // Не стоит обращаться к бэку
    /* Можно 
      Обновляйте состояние через this.setState
      Выполняйте последние оптимизации
      Вызывайте сайд-эффекты (Вызов AJAX и т.д.) только в случае server-side-rendering.
    */
    /* Нельзя 
      Не выполняйте никаких сайд-эффектов (Вызов AJAX и т.д.) на стороне клиента.
    */
  }

  componentDidMount() {
    console.log('componentDidMount'); // 3. Сообщает о том, что весь дом отрендарен и готов к взаимодействию 
    // Тут можно обращаться к беку
  }

  render() {
    console.log('App render') // 2. Вызывается этот метод рендер
    const divStyle = {
      textAlign: 'center'
    }
    const {cars, showCars} = this.state;

    const renderCars = cars.map((car, idx) => {
      return (
        <ErorrBoundary key={idx}>
          <Car name={car.name} year={car.year} onDeleteCar={() => this.deleteCars(idx)} onChangeName={(evt) => this.onChangeName(evt.target.value, idx)}/>
        </ErorrBoundary>
      )
    })

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handleInput}/>
        <button onClick={this.toggleCars}>toggle cars</button>
        <button onClick={() => this.setState({clicked: true})}>Changed Click</button>
        {showCars ? renderCars : null}
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter></Counter>
        </ClickedContext.Provider>
      </div>
    )
  }
}