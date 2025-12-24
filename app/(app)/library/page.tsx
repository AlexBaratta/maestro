"use client";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { CardDeck } from "../types";
import { CardDeckListItem } from "./components/CardDeckListItem";

const LibraryList = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});

export default function Library() {
  const router = useRouter();
  const cardDeckList: CardDeck[] = [
    {
      id: "1",
      name: "Deck title 1",
      description: "we do a little bit of studying here and there",
      wordCount: 32,
    },
    {
      id: "2",
      name: "Deck title 2",
      description: "we do a little bit of studying here and there",
      wordCount: 32,
    },
    {
      id: "3",
      name: "Deck title 3",
      description: "we do a little bit of studying here and there",
      wordCount: 32,
    },
    {
      id: "4",
      name: "Deck title 4",
      description: "we do a little bit of studying here and there",
      wordCount: 32,
    },
    {
      id: "5",
      name: "Deck title 5",
      description: "we do a little bit of studying here and there",
      wordCount: 32,
    },
  ];

  return (
    <LibraryList>
      {cardDeckList.map(({ id, name, description, wordCount }) => (
        <CardDeckListItem
          name={name}
          description={description}
          wordCount={wordCount}
          onClick={() => router.push(`/${id}`)}
        />
      ))}
    </LibraryList>
  );
}
