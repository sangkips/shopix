"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import type { Product } from "../../types/product";
import { fetchProduct } from "../../lib/api";

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      if (params?.id) {
        try {
          setIsLoading(true);
          const fetchedProduct = await fetchProduct(params.id as string);
          setProduct(fetchedProduct);
        } catch (err) {
          setError("Failed to load product. Please try again.");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProductData();
  }, [params?.id]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Typography>Product not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            sx={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
            ${Number(product.price).toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
