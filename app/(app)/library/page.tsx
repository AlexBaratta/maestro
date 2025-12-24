"use client";
import { getAllDeckInfo } from "@/app/lib/decks";
import { CardDeck } from "../types";
import { DeckList } from "./components/DeckList";

export default async function Library() {
  const deckInfo: CardDeck[] = await getAllDeckInfo();

  return <DeckList deckList={deckInfo} />;
}
