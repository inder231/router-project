import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
export default function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(Appcontext);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({type:"LOGIN",payload:form})
          alert("login success");
          navigate("/products");

        }}
      >
        <FormControl w="300px" m="auto">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            required
            onChange={handleForm}
            name="email"
            id="email"
            type="email"
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            required
            onChange={handleForm}
            name="password"
            id="password"
            type="password"
          />
          <FormHelperText>We'll never share your password.</FormHelperText>
          <Button colorScheme="teal" type="submit">
            Login
          </Button>
        </FormControl>
      </form>
      <Text>
        New user.{" "}
        <Button>
          <Link to="/signup">SignUp</Link>
        </Button>
      </Text>
    </Box>
  );
}
