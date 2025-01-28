"use client";

import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "@mui/material/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <main>{children}</main>
            </Container>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
