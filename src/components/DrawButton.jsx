import React from 'react';

export default function DrawButton({ onClick, disabled }){
  return (
    <button onClick={onClick} disabled={disabled}>Draw a Card</button>
  )
}