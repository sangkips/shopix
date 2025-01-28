"use client";

import type React from "react";
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { register } from "../lib/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      await register(
        first_name,
        last_name,
        email,
        phone_number,
        password,
        password2
      );
      router.push("/auth?tab=login");
      setSuccess(true);
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="first_name"
        label="First Name"
        name="first_name"
        autoComplete="first_name"
        autoFocus
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="last_name"
        label="Last Name"
        name="last_name"
        autoComplete="last_name"
        autoFocus
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="phone_number"
        label="Phone Number"
        name="phone_number"
        autoComplete="phone_number"
        autoFocus
        value={phone_number}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password2"
        label="Confirm Password"
        type="password"
        id="password2"
        autoComplete="new-password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
      </Button>
      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}
      {success && (
        <Typography color="primary" align="center">
          Registration successful! You can now log in.
        </Typography>
      )}
    </Box>
  );
}
