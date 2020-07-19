import React from "react"

class PizzaForm extends React.Component {
state={
  topping:'',
  size:'',
  vegetarian:false
}

handleChange=(e)=>{
this.setState({[e.target.name]:e.target.value})
}
handleSubmit= e =>{
 let {topping,size,vegetarian}=this.state
  e.preventDefault()
 fetch('http://localhost:3000/pizzas',{
   method:'POST',
   headers:{
     'Content-Type':'application/json',
     Accept:'application/json'
   },
   body: JSON.stringify({
     topping,
     size,
     vegetarian
   })
 })
 .then(resp=>resp.json())
 .then(data => {this.setState({
  topping:'',
  size:'',
  vegetarian:false
  
 })
this.props.handleNewPizza(data)
})

}

  render(){
    return(
    <form onSubmit={this.handleSubmit} className="form-row">
   
    <div className="col-5">
            <input onChange={this.handleChange} name='topping' type="text" className="form-control" placeholder="Pizza Topping" value={
              this.state.topping
              }/>
        </div>  
     <select name="size" onChange={this.handleChange} value={this.state.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
        </select>


        <div className="form-check">
            <input name="vegetarian" onChange={this.handleChange}className="form-check-input" type="radio" value="true" checked={null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={this.handleChange} name="vegetarian" className="form-check-input" type="radio" value="false" checked={null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
  
        <div className="col">
          <button type="submit" className="btn btn-success" >Submit</button>
        </div>
    </form>
 
       
   
  
   

  )}
  
}

export default PizzaForm
