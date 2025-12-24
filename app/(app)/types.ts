export type CardDeck = {
  id: string;
  name: string;
  description: string;
  wordCount: number;
  terms?: Term[];
};

export type Term = {
  word: string;
  definition: string;
};
