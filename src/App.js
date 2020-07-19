import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state={
    pizzas: [],
    editPizza: {}
    }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({pizzas}))
  }
  
  handleEdit = (pizzaId) => {
    let selectedPizza = this.state.pizzas.find(pizza => pizza.id === pizzaId)
    this.setState({
      editPizza: selectedPizza
      })
  }

  handleChanges = (e) => {
    this.setState({
      editPizza: {
        ...this.state.editPizza,
        [e.target.name]: e.target.value
      }
    })
  }

  handleVegetarian = (e) => {
    this.setState({
      editPizza: {
        ...this.state.editPizza,
        vegetarian: e.target.value==="Vegetarian" ? true : false
      }
    })
  }

  handleSubmit = (edited) => {
    let editedPizza = this.state.pizzas.find(pizza => pizza.id === edited.id)
    editedPizza.topping = edited.topping
    editedPizza.size = edited.size
    editedPizza.vegetarian = edited.vegetarian
    let updatedPizzaArray = this.state.pizzas.map((pizza) => {
      if(pizza.id === this.state.id){
        return editedPizza
      }else{
        return pizza
      }
    })
    this.setState({
      pizzas: updatedPizzaArray
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          editPizza={this.state.editPizza} 
          handleChanges={this.handleChanges} 
          handleVegetarian={this.handleVegetarian}
          handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
