import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    editPizzas: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(r => r.json())
    .then(data => {
      this.setState({
        pizzas: data,

      })
    })
  }
  
  // find pizza that is clicked from pizzas(state) 
  // fill the form with the values

  handleClick = (id) => {
    let copyPizzas = [...this.state.pizzas]
    let selectedPizza = copyPizzas.find(pId => pId.id === id)
    this.setState({
      editPizzas: selectedPizza
    })
  }

  // renderPizza = (e) => {
  // let newPizzas = [...this.state.pizzas]
  
  // }

  render() {
    console.log(this.state)
    let pizzaToChange = this.state.editPizzas
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        pizza={pizzaToChange}
        // newPizza={this.renderPizza}
        />
        <PizzaList 
          pizzas={this.state.pizzas}
          handleClick={this.handleClick}
        />
      </Fragment>
    );
  }
}

export default App;
