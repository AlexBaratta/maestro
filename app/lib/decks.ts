import { describe } from "node:test";

export const getAllDeckInfo = async () => {
  // TODO
  return [
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
};

export const getDeck = async () => {
  return {
    id: "1",
    name: "Deck 1",
    description: "We study and shiii",
    wordCount: 23,
    terms: [
      {
        word: "hello",
        definition: "word",
      },
      {
        word: "whats",
        definition: "up",
      },

      {
        word: "rtyrty",
        definition: "wotryrtyrd",
      },
    ],
  };
};
