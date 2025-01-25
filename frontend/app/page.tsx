"use client";

import { Typography, Pagination } from "@mui/material";
import ProductCard from "./components/ProductCard";
import type { Product } from "./types/product";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { fetchProducts } from "./lib/api";
import Grid from "@mui/material/Grid";

export default function Home() {
  const [products, setProductss] = useState<Product[]>([]);

  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchProducts({
        page,
        limit: 5,
      });
      console.log("products", response);
      setProductss(response);
      setTotalPages(1);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid component="div" item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={8}>
        <Pagination count={totalPages} page={page} />
      </Grid>
    </Box>
  );
}
