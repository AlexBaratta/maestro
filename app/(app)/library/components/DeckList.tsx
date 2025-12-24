import { styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { CardDeck } from "../../types";
import { CardDeckListItem } from "./CardDeckListItem";

type DeckListProps = {
  deckList: CardDeck[];
};

const LibraryList = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});
export const DeckList = ({ deckList }: DeckListProps) => {
  const router = useRouter();
  return (
    <LibraryList>
      {deckList.map(({ id, name, description, wordCount }) => (
        <CardDeckListItem
          name={name}
          description={description}
          wordCount={wordCount}
          onClick={() => router.push(`/library/${id}`)}
        />
      ))}
    </LibraryList>
  );
};
