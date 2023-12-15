import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  

  // code here
  render(){
  let i_data=this.props.imageData()
  return(
    <>
    <h1>Kalvium Gallery</h1>
  <div className='body'>
    {
      i_data.map((obj)=>{
        return(
          <img key={obj.id} src={obj.img} alt="elephant"/>
        )
      })
    }

  </div>
  </>
  )
  }

}