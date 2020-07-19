import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas:[],
    search:''
  }

    componentDidMount(){
      fetch('http://localhost:3000/pizzas')
      .then(resp=>resp.json())
      .then(data=>{this.setState({pizzas:data})})  
    }

   editButton=(id)=>{
   this.state.pizzas.find(pizzas=>pizzas.id == id)  
   }

   handleNewPizza = (newPizza)=>{
     console.log(newPizza)
     this.setState({pizza:[...this.state.pizzas, newPizza]})
   }

   handleSearch=(e)=>{
     this.setState({search:e.target.value})
   }

  render() {
    let filteredPizzas = this.state.pizzas.filter(pizzas=>pizzas.topping.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <Fragment>
        <Header/>
       
        <PizzaForm
        editButton={this.editButton}
        handleNewPizza={this.handleNewPizza}
        />
         <label>
        search Pizzas:
        <input onChange={this.handleSearch} value={this.state.search}/>
      </label>
        <PizzaList
        filteredPizzas={filteredPizzas}
        pizzas={this.state.pizzas}
        editButton={this.editButton}
        />
      </Fragment>
    );
  }
}

export default App;
