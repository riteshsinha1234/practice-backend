"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation";
import SnackbarBar from "@/app/component/snackbar";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "error", // 'success', 'info', 'warning', 'error'
  });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const showSnack = (message, severity = "error") => {
    setSnack({ open: true, message, severity });
  };

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      if (!email || !password) {
        showSnack("Email and password are required.");
        setLoading(false);
        return;
      }

      if (!validateEmail(email)) {
        showSnack("Invalid email format.");
        setLoading(false);
        return;
      }

      // Simulate login success
      showSnack("Logged in successfully!", "success");
      setTimeout(() => {
        router.push("/screen/home");
      }, 800);
    }, 1000);
  };

  const handleRegisterRedirect = () => {
    router.push("/screen/register");
  };

  const handleCloseSnack = () => {
    setSnack((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#FFFFFF" }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: 350,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" textAlign="center">
          Login
        </Typography>

        {/* TextFiled for Email */}
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* TextFiled for Password */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
        </Button>

        <Typography variant="body2" textAlign="center">
          Don&apos;t have an account?{" "}
          <Link
            component="button"
            onClick={handleRegisterRedirect}
            underline="hover"
          >
            Register
          </Link>
        </Typography>
      </Paper>

      {/* ✅ Snackbar for floating validator */}
      <SnackbarBar
        open={snack.open}
        message={snack.message}
        severity={snack.severity}
        onClose={handleCloseSnack}
      />
    </Box>
  );
}
