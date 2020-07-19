import React from "react"

class PizzaForm extends React.Component {
  
  state = {
    topping: "",
    size: null,
    vegetarian: null,
    newPizza: []

  }

  handleToppingChange = (e) => {
    this.setState({
      topping: e.target.value
    })
    console.log(this.state)
  }

  handleSizeChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }
  
  handleVegChange = (e) => {
    this.setState({
      vegetarian: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let target = e.target.value
    console.log(target);
    // let pizzaToAdd 
    // this.setState({
    //   newPizza: [...this.state.newPizza, pizzaToAdd]
    // })
  }
   
  render(){
    return(
        <div className="form-row" onSubmit={this.handleSubmit}>
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping} onChange={this.handleToppingChange}/>
          </div>
          <div className="col">
            <select value={this.state.value} onChange={this.handleSizeChange} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" checked={null} onChange={this.handleVegChange}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" checked={null} onChange={this.handleVegChange}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </div>
  
    )
  }
}

export default PizzaForm
