import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref style={{ color: "inherit", textDecoration: "none" }}>
            My Ecommerce Store
          </Link>
        </Typography>
        <Button color="inherit" startIcon={<ShoppingCartIcon />}>
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
}
