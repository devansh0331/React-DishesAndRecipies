import React from 'react'

function cardDesc(props) {
  return (
    <div className="cardDesc-container">

      <span>Dish Name</span>

      <div className="cardDesc-flex">
        <div className="cardDesc-description">

          <span>HealthLabels</span>
              <ul>
                {props.healthLabels.map((list , key) => {
                  return <li key={key}>{props.healthLabels}</li>
                })}
              </ul>

        </div>
        

        <div className="cardDesc-image">
          
        </div>

      </div>
      
    </div>
  )
}

export default cardDesc
