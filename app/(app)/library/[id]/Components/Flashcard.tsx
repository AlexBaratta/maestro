import { Term } from "@/app/(app)/types";
import { styled } from "@mui/material";
import { FlashcardArray, IFlashcard } from "react-quizlet-flashcard";

type FlashcardProps = {
  terms: Term[];
};

const FlashcardText = styled(`div`)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const Flashcard = ({ terms }: FlashcardProps) => {
  const flashcards: IFlashcard[] = terms.map(({ word, definition }) => ({
    front: {
      html: <FlashcardText>{word}</FlashcardText>,
    },
    back: {
      html: <FlashcardText>{definition}</FlashcardText>,
    },
  }));

  return (
    <div className="storyContainer">
      <FlashcardArray deck={flashcards} />
    </div>
  );
};
