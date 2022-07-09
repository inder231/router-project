import {
  Box,
  ListItem,
  UnorderedList,
  IconButton,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from "@chakra-ui/react";
import styles from '../styles/navbar.module.css'
import React from "react";
import { CopyIcon} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Themecontext from "../context/Themecontext";


const Navbar = () => {
  const { mode, toggleMode } = useContext(Themecontext);
  return (
    <Box className={mode==='light'?styles.light:styles.dark}
      display="flex"
      justifyContent="space-evenly"
      height="70px"
      alignItems="center"
      background="white"
      fontSize="20px"
      fontWeight="bold"
      position="relative"
      borderBottom="1px solid gray"
    >
      <Box flex="1">
        <UnorderedList
          styleType="none"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <ListItem>
            <NavLink to="/">
              <CopyIcon
                w={8}
                h={8}
                color="red.500"
                margin="10px"
                background="lightgray"
                padding="5px"
                borderRadius="5px"
                cursor="pointer"
              />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/about">About Us</NavLink>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box flex="1">
        <UnorderedList
          styleType="none"
          display="flex"
          justifyContent="space-evenly"
        >
          {/* <ListItem><NavLink to="/FAQ" >FAQ</NavLink></ListItem> */}
          <ListItem>
            <NavLink to="/contact">Contact</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/cart">
              <IconButton aria-label="Cart" border="3px solid" >
                <Image width="40px" height="40px" borderRadius="5px" src="https://image.shutterstock.com/image-vector/ecommerce-shopping-cart-icon-flat-600w-1934607935.jpg" />
              </IconButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <Button onClick={() => toggleMode()} style={mode==='light'?{background:'black',color:'white'}:{background:'white',color:'black'}} >Mode:{mode}</Button>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <Popover  >
          <PopoverTrigger>
            <Button bgColor='lightpink' >Big sale !!</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Visit Cart</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button>Cart</Button>
              </PopoverBody>
              <PopoverFooter>
                50% off on UPS and on many electronic items
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </Box>
  );
};

export default Navbar;
