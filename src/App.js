import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    editPizza: {}
  }
  componentDidMount(){
    this.getPizzas()
  }
  

  getPizzas = () => {
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

  findPizzaToEdit = (id) => {
    let selectedPizza = this.state.pizzas.find(pId => pId.id === id)
    this.setState({
      editPizza: selectedPizza
    })
  }


  render() {
    console.log(this.state)
    let pizzaToChange = this.state.editPizza
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          pizza={pizzaToChange}
          getPizzas={this.getPizzas}
        />
        <PizzaList 
          pizzas={this.state.pizzas}
          findPizzaToEdit={this.findPizzaToEdit}
        />
      </Fragment>
    );
  }
}

export default App;
