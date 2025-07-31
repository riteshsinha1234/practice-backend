"use client";

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
import { useState } from "react";
import { useRouter } from "next/navigation";
import SnackbarBar from "@/app/component/snackbar";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const handleRegister = () => {
    setLoading(true);

    setTimeout(() => {
      if (!name || !email || !password || !confirmPassword) {
        showSnack("All fields are required.");
        setLoading(false);
        return;
      }

      if (!validateEmail(email)) {
        showSnack("Please enter a valid email.");
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        showSnack("Passwords do not match.");
        setLoading(false);
        return;
      }

      // Simulate registration success
      showSnack("Registered successfully!", "success");
      setTimeout(() => {
        setLoading(false);
        router.push("/screen/home");
      }, 800);
    }, 1000);
  };

  const handleLoginRedirect = () => {
    router.push("/screen/login");
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
          Register
        </Typography>

        {/* TextFiled for Name */}
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* TextFiled for Eamil */}
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

        {/* TextFiled for Confirm Password */}
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* TextFiled for Confirm Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
        </Button>

        <Typography variant="body2" textAlign="center">
          Already have an account?{" "}
          <Link
            component="button"
            onClick={handleLoginRedirect}
            underline="hover"
          >
            Login
          </Link>
        </Typography>
      </Paper>

      {/* ✅ Snackbar Validator */}
      <SnackbarBar
        open={snack.open}
        message={snack.message}
        severity={snack.severity}
        onClose={handleCloseSnack}
      />
    </Box>
  );
}
