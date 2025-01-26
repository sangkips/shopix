import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            href="/"
            passHref
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button color="inherit">Shopix</Button>
          </Link>
        </Typography>

        {isAuthenticated ? (
          <>
            <Link href="/profile" passHref>
              <Button color="inherit">Profile</Button>
            </Link>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Link
            href="/auth"
            passHref
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button color="inherit">Account</Button>
          </Link>
        )}
        <Button color="inherit" startIcon={<ShoppingCartIcon />}>
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
}
