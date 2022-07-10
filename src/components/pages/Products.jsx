import React from "react";
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
import { Link,Navigate } from "react-router-dom";
export default function Products() {
  const {data} = useContext(Appcontext);
  // const axios = require("axios");

  const getClothing = () => {
    const options = {
      method: "GET",
      url: "https://apidojo-forever21-v1.p.rapidapi.com/categories/v2/list",
      headers: {
        "X-RapidAPI-Key": "c4f7849e6fmsh5b9978d274f63e0p10c411jsn4b8bbd8f09b4",
        "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
      })
      .catch(function (error) {
      });
  };
  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink>Food</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => getClothing()}>
            Clothing
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Sports</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <Heading as="h3" size="2xl">
          Product List
        </Heading>
        <Grid m="2rem" templateColumns={{base:"repeat(2, 1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap={6}  >
          {data?.map((ele) => (
            <Box
              key={ele.id}
              position="relative"
              boxShadow="dark-lg"
              padding="10px"
              borderRadius="10px"
            >
              <Button position="absolute" top="0" left="0" bgColor="orange">
                <Link to={`/products/${ele.id}`} >
                Order Now
                </Link>
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
      </Box>
    </Box>
  );
}
