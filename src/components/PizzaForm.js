import React from "react"

class PizzaForm extends React.Component {
  
 

  state = {
    topping: "",
    size: null,
    vegetarian: null

  }

  componentDidUpdate(prevProps){
    if (prevProps.pizza.id !== this.props.pizza.id){
      this.setState({
        ...this.state,
        topping: this.props.pizza.topping
      })   
    } 
  }

  handleToppingChange = (e) => {
    this.setState({
      topping: e.target.value
    })
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
    console.log(e.target, this.props.pizza.id)
    fetch(`http://localhost:3000/pizzas/${this.props.pizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        topping: e.target.topping.value,
        size: e.target.size.value
      })
    })
    .then(this.props.getPizzas)
   
  }
   
  render(){
    console.log(this.state)
    return(
        <form className="form-row" onSubmit={this.handleSubmit}>
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" name='topping' value={this.state.topping} onChange={this.handleToppingChange}/>
          </div>
          <div className="col">
            <select value={this.state.value} onChange={this.handleSizeChange} className="form-control" name='size'>
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
        </form>
  
    )
  }
}

export default PizzaForm
