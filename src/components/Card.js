import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className="card">
      <h1 className="card-header"> {props.title}</h1>
      <img src={props.image} className="card-img" alt=""/>
      <a href={props.handleOnClick}><button  type="">View Recipie and Details</button></a> 
      {/* <div className="card-content">
      <span className="card-recipe"><strong>Recipie</strong> </span>
      <ol className="card-recipe">{props.recipies.map((lists , key) => {
        return <li key={key}>{props.recipies}<br></br></li>
      })}</ol></div> */}
    </div>
  )
}

export default Card
