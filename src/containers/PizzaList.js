import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    console.log(this.props.pizzas)

    return (
      <React.Fragment>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.filteredPizzas.map((pizza,key)=>
             <Pizza 
             key={pizza.id}
             id={pizza.id}
             topping={pizza.topping}
             size={pizza.size}
             vegetarian={pizza.vegetarian}
             editButton={this.props.editButton}
             />
          )}
        </tbody>
      </table>
      </React.Fragment>
    );
  }

}

export default PizzaList;
