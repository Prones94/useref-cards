import React, { useEffect, useState, useRef } from "react";
import { createDeck, drawCard } from "./services/cardApi";
import CardDisplay from "./components/CardDisplay";
import DrawButton from "./components/DrawButton";
import "./index.css";

export default function App() {
  const [deckId, setDeckId] = useState(null);
  const [card, setCard] = useState(null);
  const [remaining, setRemaining] = useState(52);
  const buttonRef = useRef(null); 

  useEffect(() => {
    async function initializeDeck() {
      const newDeckId = await createDeck();
      setDeckId(newDeckId);
    }
    initializeDeck();
  }, []);

  const handleDrawCard = async () => {
    if (remaining > 0) {
      const data = await drawCard(deckId);
      if (data.success) {
        setCard(data.cards[0]);
        setRemaining(data.remaining);
      }
    } else {
      alert("Error: no cards remaining!");
    }
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  return (
    <div className="app">
      <h1>Deck of Cards</h1>
      <CardDisplay card={card} />
      <button
        ref={buttonRef}
        onClick={handleDrawCard}
        disabled={remaining === 0}
        className="draw-button"
      >
        Draw a Card
      </button>
      <p>{remaining} cards remaining</p>
    </div>
  );
}
