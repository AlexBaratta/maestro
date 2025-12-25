"use client";
import { CardDeck } from "@/app/(app)/types";
import { WordList } from "./WordList";
import { styled, Typography } from "@mui/material";

type DeckViewProps = {
  deck: CardDeck;
};

const Container = styled(`div`)({
  display: "flex",
  flexDirection: "column",
});

export const DeckView = ({ deck }: DeckViewProps) => {
  return (
    <Container>
      <Typography variant="h3" color="primary">
        {deck.name}
      </Typography>
      <WordList terms={deck.terms!} />
    </Container>
  );
};
