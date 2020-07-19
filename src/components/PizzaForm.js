import React from "react"

class PizzaForm extends React.Component{

  // state = {
  //   topping: this.props.pizza.topping,
  //   size: this.props.pizza.size,
  //   vegetarian: this.props.pizza.vegetarian
  // }





  render(){
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" name = "topping" placeholder="Pizza Topping" value={this.props.topping} onChange={this.props.handleChange}/>
          </div>
          <div className="col">
            <select name="size" value={this.props.size} className="form-control" onChange={this.props.handleChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" name = "vegetarian" type="radio" value="true" checked={this.props.vegetarian==="true"} onChange={this.props.handleVegetarian}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" name = "vegetarian" type="radio" value="false" checked={this.props.vegetarian==="false"} onChange={this.props.handleVegetarian}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.props.handleSubmit}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
