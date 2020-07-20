import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizza: [],
    toppingInput:'Select a Topping ',
    size: 'Small',
    vegetarian: ' ',
    pizzaFormId: ' '
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pizza: data
      })
    })
  }

  clickHandler = (id) => {
  
    let foundPizza = this.state.pizza.find(pizza => pizza.id === id )
     this.setState({
      toppingInput: foundPizza.topping,
      size: foundPizza.size,
      vegetarian: foundPizza.vegetarian,
      pizzaFormId: foundPizza.id
    })
  }
  
  changePizza = (e) => {
    console.log(e.target.value)
    this.setState({
      toppingInput: e.target.value
    })
  }

  changeSize = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  changeVeg = (e) => {
    console.log(e.target.value)
    if(e.target.value === 'Not Vegetarian'){
      this.setState({
        vegetarian: false
      })}
      else if(e.target.value === 'Vegetarian'){
        this.setState({
          vegetarian: true 
        })
      }
    }

    submitPizza = (e) => {
      console.log(e.target.id)
      fetch(`http://localhost:3000/pizzas/${e.target.id}`, {
             method: "PATCH",
             headers: {
               "content-type": "application/json",
               "accept": "application/json"
              },
              body: JSON.stringify({
                topping: this.state.toppingInput,
                size: this.state.size,
                vegetarian: this.state.vegetarian
              })
      })
      .then(res => res.json())
      .then(data => {
        let updatedPizzaArray = this.state.pizza.map( pizza => {
          if(pizza.id === data.id){
            return {...pizza, topping: data.topping, size: data.size, vegetarian: data.vegetarian}
          }
          else return pizza
        })
        this.setState({
          pizza: updatedPizzaArray
        })
      })

      this.setState({
        toppingInput:'Select a Topping ',
        size: 'Small',
        vegetarian: ' ',
        pizzaFormId: ' '
      })
    }
  

  render() {
    console.log(this.state.vegetarian)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzas={this.state.pizza}
        topping={this.state.toppingInput}
        size={this.state.size}
        vegetarian={this.state.vegetarian}
        pizzaFormId={this.state.pizzaFormId}
        changePizza={this.changePizza}
        changeSize={this.changeSize}
        changeVeg={this.changeVeg}
        submitPizza={this.submitPizza}
        />
        <PizzaList pizzas={this.state.pizza}
        clickHandler={this.clickHandler}/>
      </Fragment>
    );
  }
}

export default App;
