"use client";
import { styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { CardDeck } from "../../types";
import { CardDeckListItem } from "./CardDeckListItem";
import { FlexList } from "../styles";

type DeckListProps = {
  deckList: CardDeck[];
};

export const DeckList = ({ deckList }: DeckListProps) => {
  const router = useRouter();
  return (
    <FlexList>
      {deckList.map(({ id, name, description, wordCount }) => (
        <CardDeckListItem
          name={name}
          description={description}
          wordCount={wordCount}
          onClick={() => router.push(`/library/${id}`)}
        />
      ))}
    </FlexList>
  );
};
