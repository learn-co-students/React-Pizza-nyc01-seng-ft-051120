import React, { Component } from 'react';

class PizzaForm extends Component {
 state = {
   pizza: this.props.pizza,
   topping: this.props.pizza.topping,
   size: this.props.pizza.size,
   vegetarian: this.props.pizza.vegetarian
 }

componentDidUpdate(prevProps) {
 if (this.props.pizza !== prevProps.pizza) {
  this.updatePizza(this.props)
 }
}

updatePizza = e => {
this.setState({
  pizza: e.pizza,
  topping: e.pizza.topping,
  size: e.pizza.size,
  vegetarian: e.pizza.vegetarian
 })
}

handleToppingChange = e => {
  this.setState({ topping: e.target.value })
}

handleSizeChange = e => {
  this.setState({ size: e.target.value })
}

handleVegetarianChange = e => {

  this.state.vegetarian ?
  this.setState({ vegetarian: false })
  :
  this.setState({ vegetarian: true })
}


render() {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={this.handleToppingChange}type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping}/>
        </div>
        <div className="col">
          <select onChange={this.handleSizeChange} value={this.state.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={this.handleVegetarianChange} className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={this.handleVegetarianChange} className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=> this.props.submitEdit(this.state)}>Submit</button>
        </div>
      </div>

   )
  }

}
export default PizzaForm
