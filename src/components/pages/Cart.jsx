import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Cart = () => {
  const {cartProductList} = useContext(Appcontext);
  return (
    <Box>
      {
        cartProductList?.map((ele)=>(
          <Box key={ele.id} >
            Item
          </Box>
        ))
      }
    </Box>
  )
}

export default Cart