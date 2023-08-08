import { Typography } from "@mui/material";

const Wallet = ({ handleClick }) => {
  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <Typography>Click on coin to insert it</Typography>
      <button
        style={{
          width: 55,
          height: 55,
          borderRadius: "50%",
          margin: 5,
          cursor: "pointer",
        }}
        onClick={() => {
          handleClick(25);
        }}
      >
        25
      </button>
      <button
        style={{
          width: 35,
          height: 35,
          borderRadius: "50%",
          margin: 5,
          cursor: "pointer",
        }}
        onClick={() => {
          handleClick(10);
        }}
      >
        10
      </button>
      <button
        style={{
          width: 45,
          height: 45,
          borderRadius: "50%",
          margin: 5,
          cursor: "pointer",
        }}
        onClick={() => {
          handleClick(5);
        }}
      >
        5
      </button>
    </div>
  );
};

export default Wallet;
