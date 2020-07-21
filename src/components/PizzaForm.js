import React from "react"


class PizzaForm extends React.Component {



  render(){
    const {topping,size,vegetarian} = this.props.selectedPizza
    console.log(this.props.selectedPizza);
    return(
        <div className="form-row">
          <div className="col-5">
              <input 
                onChange={this.props.handleFormChange}
                type="text"
                name="topping" 
                className="form-control" 
                placeholder="Pizza Topping" 
                value={topping}/>
          </div>
          <div className="col">
            <select value={size} name="size" className="form-control" onChange={this.props.handleFormChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input 
                onChange={this.props.handleFormChange}
                className="form-check-input" 
                type="radio" 
                name="vegetarian" 
                value="YES" 
                checked={vegetarian ==="YES"}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input
              onChange={this.props.handleFormChange} 
              className="form-check-input" 
              type="radio" 
              name="vegetarian" 
              value="NO" 
              checked={vegetarian ==="NO"}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={()=>{this.props.handleFormBtnClick(this.props.selectedPizza)}}>Submit</button>
          </div>
        </div>
  
    )
  }
}

export default PizzaForm
