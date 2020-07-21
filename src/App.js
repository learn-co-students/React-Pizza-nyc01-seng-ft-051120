import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const selectedPizzaInitialState= {
  id:'',
  topping:"",
  size:'Small',
  vegetarian:''
}
class App extends Component {
  state ={
    pizzas:[],
    selectedPizza: selectedPizzaInitialState
  }
  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas=> this.setState({pizzas}))
  }

  handleFormChange =(e)=>{
    const changefield = {[e.target.name] : e.target.value}
    this.setState({selectedPizza: {...this.state.selectedPizza,...changefield}})
  }

  handleFormBtnClick =(pizza)=>{
    const {id,topping,size,vegetarian} = pizza

    const serverData = {
      method:(!!id?"PATCH":"POST"),
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({topping,size,vegetarian:vegetarian === "YES"})
    }
    console.log(serverData)
    
    fetch(`http://localhost:3000/pizzas/${id}`,serverData)
    .then(resp => resp.json())
    .then(updatedPizza=> {
      if(!!id){
        const newPizzaArray = this.state.pizzas.map(pizza=>{
          if(pizza.id === id){
            return updatedPizza
          }
          return pizza
        })
        this.setState({pizzas:newPizzaArray,selectedPizza:selectedPizzaInitialState})
      }else{
        this.setState({pizzas:[...this.state.pizzas,updatedPizza],selectedPizza:selectedPizzaInitialState})
      }
    })
  }

  setPizzaToBeEdited =(pizza)=>{
    const selectedPizza = {
      id:pizza.id,
      topping:pizza.topping,
      size:pizza.size,
      vegetarian: pizza.vegetarian? "YES":"NO"
    }

    this.setState(prevState=>{
      return {...prevState, selectedPizza}
    })
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza = {this.state.selectedPizza} 
        handleFormChange={this.handleFormChange}
        handleFormBtnClick={this.handleFormBtnClick}
        />
        <PizzaList pizzas={this.state.pizzas}
          setPizzaToBeEdited={this.setPizzaToBeEdited}/>
      </Fragment>
    );
  }
}

export default App;
