import { Term } from "@/app/(app)/types";
import { TermCard } from "./TermCard";
import { FlexList } from "../../styles";

type WordListProps = {
  terms: Term[];
};

export const WordList = ({ terms }: WordListProps) => {
  return (
    <FlexList>
      {terms.map((term) => (
        <TermCard term={term} />
      ))}
    </FlexList>
  );
};
