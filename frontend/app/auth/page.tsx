"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Container, Box, Tabs, Tab } from "@mui/material";
import Login from "./../components/Login";
import Register from "./../components/Register";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "login") {
      setTabIndex(0);
    } else if (tab === "register") {
      setTabIndex(1);
    }
  }, [searchParams]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        {tabIndex === 0 && <Login />}
        {tabIndex === 1 && <Register />}
      </Box>
    </Container>
  );
}
