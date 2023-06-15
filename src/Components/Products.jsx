import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from "./Product.jsx"
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import pollobacon from "../images/logomaster.png"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const products = [
  {
    id: 1,
    name: "Pollo Smoke",
    productType: "Pollo",
    price: 1600,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Lomo / Lechuga / Tomate / Queso / Jamon / Huevo y pan arabe. Ideal para compartir!",
  },
  {
    id: 2,
    name: "Pollo J&Q",
    productType: "Pollo",
    price: 1500,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan arabe / Lomo / Roquefort / Cebolla caramelizada / Lechuga / Tomate.",
  },
  {
    id: 3,
    name: "Pollo Bacon",
    productType: "Pollo",
    price: 1500,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan arabe / Lomo / Cheddar / Cebolla caramelizada / Tomate / Huevo / Barbacoa.",
  },
  {
    id: 4,
    name: "Pollo clasico",
    productType: "Pollo",
    price: 1400,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Carne desmenuzada / Panceta / Queso cheddar / Cebolla caramelizada/Barbacoa.",
  },
  {
    id: 5,
    name: "Simple",
    productType: "Carne vacuna",
    price: 1400,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Carne desmenuzada / Tomate / Lechuga / Queso Tybo / Salsa criolla.",
  },
  {
    id: 6,
    name: "Clásica",
    productType: "Carne vacuna",
    price: 1500,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Carne desmenuzada / Queso Roquefort / Hongos salteados / cebolla caramelizada.",
  },
  {
    id: 7,
    name: "Master",
    productType: "Carne vacuna",
    price: 1600,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Carne desmenuzada / Pimientos tatemados / Queso tybo / Panceta / Salsa sriracha.",
  },
  {
    id: 8,
    name: "Napolitana",
    productType: "Carne vacuna",
    price: 1600,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frito / Tomates frescos / Aros de cebolla / Queso cheddar.",
  },
  {
    id: 9,
    name: "Completa",
    productType: "Carne vacuna",
    price: 1600,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
  {
    id: 10,
    name: "Doble",
    productType: "Carne vacuna",
    price: 1800,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
  {
    id: 11,
    name: "Royal",
    productType: "Carne vacuna",
    price: 1900,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
  {
    id: 12,
    name: "Grand Master",
    productType: "Carne vacuna",
    price: 1900,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
  {
    id: 13,
    name: "Smoke",
    productType: "Carne vacuna",
    price: 1900,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
  {
    id: 14,
    name: "Boss",
    productType: "Carne vacuna",
    price: 1800,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
  {
    id: 15,
    name: "Tybo",
    productType: "Carne vacuna",
    price: 1800,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
  {
    id: 16,
    name: "Doble Napolitana",
    productType: "Carne vacuna",
    price: 1800,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
  {
    id: 17,
    name: "Blue",
    productType: "Carne vacuna",
    price: 1600,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
  {
    id: 18,
    name: "Triple",
    productType: "Carne vacuna",
    price: 2100,
    rating: 4.5,
    quantity: 1,
    image: pollobacon,
    description: "Pan brioche / Pollo tiernizado frita / Lechuga / Tomate / Queso tybo / Jamon.",
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.productType === selectedCategory)
    : products;

  return (
    <>
   
    <Box className="background-image-class" sx={{ flexGrow: 1, padding:1, minHeight:"91.5vh", width: '100%', overflow: 'auto', paddingTop:"10vh"}}>
      <Grid container spacing={1} padding={0}>
        <Grid item xs={12}>
          <FormControl className="custom-form-control">
            <InputLabel id="category-label">Categoría</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <MenuItem value="">Todo el menú</MenuItem>
              <MenuItem value="Pollo">Pollo</MenuItem>
              <MenuItem value="Carne vacuna">Carne Vacuna</MenuItem>
              <MenuItem value="Benidas">Bebidas</MenuItem>
              {/* Agrega más opciones de categorías aquí */}
              
            </Select>
          </FormControl>
        </Grid>
        {
            filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={product.id} style={{ display:"flex", justifyContent:"center"}}>
                    <Product product={product}/>
                </Grid>
            ))
        }
      </Grid>
    </Box>
    </>
  );
}