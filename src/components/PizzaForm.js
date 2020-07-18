import React from "react"
import { render } from "react-dom"

class PizzaForm extends React.Component {
  
  render(){
    const {topping, size, id, vegetarian}=this.props.edit
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={topping} onChange={this.props.handleToppingEdit}/>
        </div>
        <div className="col">
          <select value={size} className="form-control" onChange={this.props.handleSizeEdit}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian} onClick={this.props.handleVegetarianEdit}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onClick={this.props.handleVegetarianEdit} checked={!vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>this.props.handleEditSubmit(id)}>Submit</button>
        </div>
      </div>

  )
  }
}

export default PizzaForm
