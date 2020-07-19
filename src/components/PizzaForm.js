import React from "react"

const PizzaForm = (props) => {

  return(
    
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" onChange={props.changePizza} value={
                //Pizza Topping Should Go Here
                
                props.topping
              }/>
        </div>
        <div className="col">
          <select onChange={props.changeSize} value={props.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onClick={props.changeVeg} type="radio" value='Vegetarian' checked={props.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onClick={props.changeVeg} type="radio" value='Not Vegetarian' checked={props.vegetarian ? null : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button id={props.pizzaFormId} type="submit" className="btn btn-success" onClick={props.submitPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
