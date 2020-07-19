import React from "react"

const Pizza = (props) => {

  let handleEdit = (event) => {
    props.handleEdit(props.id)
  }


  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? 'Yes' : 'No'}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleEdit}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
