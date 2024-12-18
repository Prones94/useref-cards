import axios from "axios";

const BASE_URL = "https://deckofcardsapi.com/api/deck";

export async function createDeck() {
  try {
    const response = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
    return response.data.deck_id;
  } catch (error) {
    console.error("Error creating a new deck:", error);
    throw error;
  }
}

export async function drawCard(deckId) {
  try {
    const response = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`);
    return response.data;
  } catch (error) {
    console.error("Error drawing a card:", error);
    throw error;
  }
}