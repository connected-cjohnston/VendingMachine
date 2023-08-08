import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Title from "./components/Title";
import Display from "./components/Display";
import ItemCard from "./components/ItemCard";
import Wallet from "./components/Wallet";
import "./App.css";
import { useState } from "react";
import formatAsCurrency from "./formatters";

const items = [
  { emoji: "🍎", text: "A", cost: 25, amount: 5 },
  { emoji: "🍪", text: "B", cost: 50, amount: 5 },
  { emoji: "🥤", text: "C", cost: 150, amount: 5 },
  { emoji: "🍺", text: "D", cost: 375, amount: 5 },
  { emoji: "🍷", text: "E", cost: 550, amount: 5 },
  { emoji: "🍰", text: "F", cost: 975, amount: 5 },
];

// const initialChange = { quarter: 2, dime: 5, nickel: 3 };

function App() {
  let defaultText = "INSERT COIN";

  const [currentTotal, setCurrentTotal] = useState(0);
  const [displayText, setDisplayText] = useState(defaultText);
  const [returnText, setReturnText] = useState("RETURN SLOT");

  async function updateDisplay(text, callback) {
    setTimeout(() => {
      console.log(text);
      callback(text);
    }, 1000);
  }

  function insertCoin(amount) {
    const newTotal = currentTotal + amount;
    setCurrentTotal(newTotal);
    setDisplayText(formatAsCurrency(newTotal));
  }

  function itemSelection(itemEmoji, cost) {
    if (currentTotal >= cost) {
      const newTotal = currentTotal - cost;
      setCurrentTotal(0);
      setDisplayText("THANK YOU");
      setReturnText(`${itemEmoji} - ${formatAsCurrency(newTotal)}`);
      updateDisplay(defaultText, setDisplayText);
    } else {
      updateDisplay(displayText, setDisplayText);
      setDisplayText(formatAsCurrency(cost));
    }
  }

  return (
    <Container>
      <Box
        sx={{
          width: 400,
          height: 500,
          textAlign: "center",
          padding: 5,
          backgroundColor: "#F4F4F4",
          margin: "auto",
          marginTop: "100px",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Title />
          </Grid>

          <Grid xs={2}></Grid>
          <Grid xs={8}>
            <Display text={displayText} />
          </Grid>
          <Grid xs={2}></Grid>

          {items.map((item, index) => {
            return (
              <Grid xs={4} key={index}>
                <ItemCard
                  buttonEmoji={item.emoji}
                  buttonText={item.text}
                  cost={item.cost}
                  handleClick={itemSelection}
                />
              </Grid>
            );
          })}

          <Grid xs={2}></Grid>
          <Grid xs={8}>
            <Display text={returnText} />
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </Box>

      <Wallet handleClick={insertCoin} />
    </Container>
  );
}

export default App;
