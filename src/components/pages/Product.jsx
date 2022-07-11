import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@chakra-ui/react";
import { Appcontext } from "../context/Appcontext";

export default function Product() {
  const params = useParams();
  const { addtocart } = useContext(Appcontext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://rct-restaurant-app-api.herokuapp.com/items/${params.product_id}`
      )
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  }, [params.product_id]);
  if (error) {
    return (
      <Box>
        <Text fontSize="30px">Something went wrong...</Text>
      </Box>
    );
  }
  return (
    <Box>
      {isLoading ? (
        <Box>
          <CircularProgress isIndeterminate color="green.300" />
        </Box>
      ) : (
        <Box>
          {product && (
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Box>
                <Text fontSize="25px">{product.name}</Text>
                <Image src={product.src} w="350px" />
              </Box>
              <Box>
                <Text>Rating: {product.rating}</Text>
                <Text>Reviews: {product.reviews}</Text>
                <Button colorScheme="orange"
                  onClick={() =>
                    addtocart({ id: product.id, price: product.costForTwo })
                  }
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
