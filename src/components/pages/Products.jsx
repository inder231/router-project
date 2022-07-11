import React, { useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Image,
  Grid,
  Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import { Link } from "react-router-dom";
export default function Products() {
  const { data } = useContext(Appcontext);
  // const axios = require("axios");
  const [clothing, setClothing] = useState([]);
  const [food,setFood] = useState(true);
  const [clothes,setClothes] = useState(false);
  const getClothing = (product) => {
    
    axios
      .get(`https://fakestoreapi.com/${product}`)
      .then((res) => {
        setFood(false);
        setClothes(true);
        setClothing(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error", err));
  };
  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={()=>{setClothes(false); setFood(true);}} >Food</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => getClothing('products')}>
            Clothing
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink onClick={()=>getClothing('products/category/jewelery')} >Jewellery</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <Heading as="h3" size="2xl">
          Product List
        </Heading>
        {food && (
          <Grid
            m="2rem"
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={6}
          >
            {data?.map((ele) => (
              <Box
                key={ele.id}
                position="relative"
                boxShadow="dark-lg"
                padding="10px"
                borderRadius="10px"
              >
                <Button position="absolute" top="0" left="0" bgColor="orange">
                  <Link to={`/products/${ele.id}`}>Order Now</Link>
                </Button>
                <Box
                  marginTop="35px"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <Image src={ele.src} width="80px" />
                  <Text color="red">{ele.name}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        )}

        {clothes && (
          <Grid
            m="2rem"
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={6}
          >
            {clothing?.map((ele) => (
              <Box
                key={ele.id}
                position="relative"
                boxShadow="dark-lg"
                padding="10px"
                borderRadius="10px"
              >
                <Button position="absolute" top="0" left="0" bgColor="orange">
                  <Link to={`/products/${ele.id}`}>Order Now</Link>
                </Button>
                <Box
                  marginTop="35px"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <Image src={ele.image} width="80px" />
                  <Text color="red">{ele.title}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
