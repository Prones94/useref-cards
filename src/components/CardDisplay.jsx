import React from 'react'

export default function CardDisplay({ card }) {
  return (
    <div className="card-container">
      {card ? (
        <img src={card.image} alt={`${card.value} of ${card.suit}`}/>
      ) : (
        <p>No card drawn yet</p>
      )}
    </div>
  )
}