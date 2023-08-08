import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ItemCard = ({ buttonEmoji, buttonText, cost, handleClick }) => {
  return (
    <Card sx={{ maxWidth: 120 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h3">{buttonEmoji}</Typography>

        <CardActions sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={() => handleClick(buttonEmoji, cost)}
          >
            {buttonText}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
