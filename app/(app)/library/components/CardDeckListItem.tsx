"use client";
import { Box, Card, CardContent, Typography } from "@mui/material";

type CardDeckListItemProps = {
  name: string;
  description: string;
  wordCount: number;
  onClick: () => void;
};

export const CardDeckListItem = ({
  name,
  description,
  wordCount,
  onClick,
}: CardDeckListItemProps) => {
  return (
    <Box>
      <Card
        onClick={onClick}
        sx={{
          maxWidth: "700px",
          display: "flex",
          justifyContent: "space-between",
          "&:hover": {
            boxShadow: "6",
            cursor: "pointer",
          },
        }}
      >
        <CardContent>
          <Typography variant="h5">
            {name} | {wordCount} terms
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
