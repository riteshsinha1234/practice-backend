"use client";

import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={4}
      textAlign="center"
    >
      <Typography variant="h3" fontWeight="bold" mb={2}>
        404 - Page Not Found
      </Typography>

      <Typography variant="body1" mb={3}>
        Oops! Lost your way? This page is playing hide and seek.
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={4}>
        Looks like we couldn’t find what you were looking for.
      </Typography>

      <Button variant="contained" onClick={handleHome}>
        Go to Home
      </Button>
    </Box>
  );
}
