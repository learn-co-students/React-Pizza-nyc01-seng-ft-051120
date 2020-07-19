import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  state = {
   currentPizza: null
 }

  editPizza = e => {
    this.setState({currentPizza: e})
  }

  submitEdit = e => {
    if( e.id ){
     this.patch(e)
   } else {
  console.log("create")
   }
 }

 patch = e => {

   fetch(`http://localhost:3000/pizzas/${e.id}`, {

    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
     body: JSON.stringify({
      topping: e.topping,
      size: e.size,
      vegetarian: e.vegetarian
    })
   .then(res => res.json())
   .then(data => {
     console.log(data)
    })

   })

 }

  render() {
    let defaultPizza = {
"id": -1,
"topping": "Plain",
"size": "Small",
"vegetarian": true
}
 const pizza = this.state.currentPizza || defaultPizza
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.editPizza} pizza={pizza} submitEdit={this.submitEdit} />
        <PizzaList editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
