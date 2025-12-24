import { CardDeck } from "@/app/(app)/types";
import { WordList } from "./WordList";

type DeckViewProps = {
  deck: CardDeck;
};

export const DeckView = ({ deck }: DeckViewProps) => {
  return <WordList terms={deck.terms!} />;
};
