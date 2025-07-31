"use client";
import { Box, Typography, Paper } from "@mui/material";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#f0f4f8" }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          maxWidth: 500,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="primary">
          🎉 Congratulations!
        </Typography>
        <Typography variant="body1">
          You have successfully created a backend.
        </Typography>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png"
          alt="Victory"
          style={{ width: "100%", maxHeight: "250px", objectFit: "contain" }}
        />
      </Paper>
    </Box>
  );
}
