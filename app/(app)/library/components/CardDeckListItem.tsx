import { Box, Card, CardContent, Typography } from "@mui/material";

type CardDeckListItemProps = {
  name: string;
  description: string;
  wordCount: number;
};

export const CardDeckListItem = ({
  name = "Vocab words",
  description = "we do a little thing or 2 with studying here",
  wordCount = 123,
}: CardDeckListItemProps) => {
  return (
    <Box>
      <Card sx={{ maxWidth: "700px" }}>
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
