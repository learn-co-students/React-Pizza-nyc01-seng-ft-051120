import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  
  state={
    pizzas: [],
    edit: {}

  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(r=>r.json())
    .then(pizzas=>{
      this.setState({pizzas})
    })
  }

  handleEdit=(id)=>{
    
    this.setState({edit:this.state.pizzas.find(pizza=> pizza.id===id) }) 
   }

   handleToppingEdit=(e)=>{
    this.setState({edit: {...this.state.edit, topping: e.target.value}})
   }
   handleSizeEdit=(e)=>{
    this.setState({edit: {...this.state.edit, size: e.target.value}})
   }

   handleVegetarianEdit=(e)=>{
     let veg
     if(e.target.value==='Vegetarian'){
       veg=true
     }
     else if(e.target.value==='Not Vegetarian'){
       veg=false
     }
     
    this.setState({edit: {...this.state.edit, vegetarian: veg}})
   }

   handleEditSubmit=(id)=>{
    fetch(`http://localhost:3000/pizzas/${id}`,{
    method: "PATCH",
    headers:{
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(this.state.edit)
    })
    .then(r=>r.json())
    .then(editedPizza=>{
      this.setState({pizzas: [...this.state.pizzas.map(pizza=>{
        if(pizza.id==editedPizza.id){
         return editedPizza
        } else return pizza
        
       })]})
    })
    
    this.setState({edit: ''})
  }
  render() {
    
    return (
      <Fragment>
        <Header/>
        <PizzaForm edit={this.state.edit}
         handleToppingEdit={this.handleToppingEdit}
          handleSizeEdit={this.handleSizeEdit} 
          handleVegetarianEdit={this.handleVegetarianEdit}
          handleEditSubmit={this.handleEditSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
