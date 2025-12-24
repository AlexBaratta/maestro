import { Term } from "@/app/(app)/types";
type WordListProps = {
  terms: Term[];
};
export const WordList = ({ terms }: WordListProps) => {
  return (
    <div>
      {terms.map(({ word, definition }) => (
        <div>
          <a>{word}</a>
          <a>{definition}</a>
        </div>
      ))}
    </div>
  );
};
