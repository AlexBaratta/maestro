import { getDeck } from "@/app/lib/decks";
import { CardDeck } from "../../types";
import { DeckView } from "./Components/DeckView";

export default async function Flashcards() {
  const deck: CardDeck = await getDeck();
  return <DeckView deck={deck} />;
}
