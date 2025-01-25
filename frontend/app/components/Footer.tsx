import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} My Ecommerce Store. All rights reserved.
      </Typography>
    </Box>
  );
}
