import { Box } from "@mui/material";

function Display({ text }) {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        textAlign: "center",
        padding: "0.5rem",
      }}
    >
      {text}
    </Box>
  );
}

export default Display;
