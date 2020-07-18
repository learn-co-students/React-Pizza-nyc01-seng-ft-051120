import React from "react"

const Pizza = (props) => {
  const {id,topping, size, vegetarian}=props
  
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian?'Yes it is!':"No it's not!"}</td>
      <td><button onClick={()=>props.handleEdit(id)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
