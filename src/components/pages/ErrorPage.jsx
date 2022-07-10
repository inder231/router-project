import { Link } from "react-router-dom";
import React from "react";
import { Heading } from "@chakra-ui/react";
const ErrorPage = () => {
  return (
    <div>
      <div>
          <Link to="/" style={{color:'orangered'}} >Go back to Homepage</Link>
        <Heading>
          You didn't break the internet, but we can't find what you are looking
          for.
        </Heading>
      </div>
      <div>
        <img
          src="https://image.shutterstock.com/shutterstock/photos/757415008/display_1500/stock-photo--funny-cats-design-757415008.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
