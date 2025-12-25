import { Term } from "@/app/(app)/types";
import { Card, CardContent, Typography } from "@mui/material";

type TermCardProps = {
  term: Term;
};

export const TermCard = ({ term }: TermCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography>{term.word}</Typography>
        <Typography>{term.definition}</Typography>
      </CardContent>
    </Card>
  );
};
