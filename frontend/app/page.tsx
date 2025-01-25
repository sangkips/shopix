import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductCard from "./components/ProductCard";
import type { Product } from "./types/product";
import Box from "@mui/material/Box";

// This would typically come from an API or database
const products: Product[] = [
  { id: 1, name: "Product 1", description: "This is product 1", price: 19.99, image: "/placeholder.svg" },
  { id: 2, name: "Product 2", description: "This is product 2", price: 29.99, image: "/placeholder.svg" },
  { id: 3, name: "Product 3", description: "This is product 3", price: 39.99, image: "/placeholder.svg" },
  { id: 3, name: "Product 4", description: "This is product 4", price: 39.99, image: "/placeholder.svg" },
];

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
