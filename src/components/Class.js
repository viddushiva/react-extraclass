import React, {Component}from 'react'


class Class extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       nam:"viddu"
    }
  }
abhi=()=>{
  this.setState({nam:"shiva"})
}
render(){
return(
 
    <>
    { this.state.nam==="viddu"?<h1>hello world</h1>:
    <h6>this is class Component</h6>}
    <h1>{this.state.nam}</h1>

    <button onClick={this.abhi}>clixk me</button>
    </>
)
}

}
export default Class;

