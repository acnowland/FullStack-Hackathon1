import React from 'react'
import "./Card.css"

export default function Card({crypto}) {
  const {name, price_usd} = crypto

  
  return (
    <ul className="cryptoCard-container">
      <div className="cryptoCard">
        <div className="card">
          <h2>{name}</h2>
          <p>${price_usd}</p>
        </div>
      </div>
    </ul>
  )
}
