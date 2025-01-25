import { notFound } from "next/navigation";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import type { Product } from "../../types/product";

// This would typically come from an API or database
const products: Product[] = [
  { id: 1, name: "Product 1", description: "This is product 1", price: 19.99, image: "/placeholder.svg" },
  { id: 2, name: "Product 2", description: "This is product 2", price: 29.99, image: "/placeholder.svg" },
  { id: 3, name: "Product 3", description: "This is product 3", price: 39.99, image: "/placeholder.svg" },
];

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number.parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <img src={product.image || "/placeholder.svg"} alt={product.name} style={{ width: "100%", height: "auto" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
