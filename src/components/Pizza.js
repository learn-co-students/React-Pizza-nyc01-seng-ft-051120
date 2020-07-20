import React from "react"

const Pizza = (props) => {
  return(
    <React.Fragment>
    {props.pizzas.map( pizza => 
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No" }</td>
      <td><button onClick={() => props.clickHandler(pizza.id)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
    )}
    </React.Fragment>
  )
}

export default Pizza
