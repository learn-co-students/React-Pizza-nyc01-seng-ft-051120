import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state ={
    pizzas: [],
    currentPizza: null,
    topping: '',
    size: '',
    vegetarian: '',
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res=>res.json())
    .then(pizzas=> this.setState({pizzas}))
  }

  handleEditClick = pizza=> {
    let vegBoolean = pizza.vegetarian.toString()
    this.setState({topping: pizza.topping, size: pizza.size, vegetarian: vegBoolean, currentPizza: pizza},
      ()=> console.log(this.state.currentPizza))
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value},
     ()=> console.log(this.state) 
      )
  }

  handleVegetarian = e => {
    this.setState({vegetarian: e.target.value}, 
      ()=> console.log(this.state.vegetarian) 
      )
  }

  handleSubmit = () => {
    console.log(this.state)
      let vegetarian;
      if (this.state.vegetarian === "true"){
        vegetarian = true
      } else if (this.state.vegetarian === "false"){
        vegetarian = false
      }
      
    fetch(`http://localhost:3000/pizzas/${this.state.currentPizza.id}`,{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          topping: this.state.topping,
          size: this.state.size,
          vegetarian
        })
      }
    )
    .then(res=>res.json())
    .then(data=>{
      let pizzas = this.state.pizzas.map(pizza=>{ 
                              if(pizza.id === data.id){
                              let updatedPizza = data
                              return updatedPizza
                              } 
                            return pizza
                            })
      this.setState({pizzas})
      this.setState({    
        currentPizza: null,
        topping: '',
        size: '',
        vegetarian: ''
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza} topping={this.state.topping} size={this.state.size} vegetarian = {this.state.vegetarian} handleChange={this.handleChange} handleVegetarian = {this.handleVegetarian} handleSubmit={this.handleSubmit}/>
        <PizzaList editPizza = {this.handleEditClick} pizzas = {this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
