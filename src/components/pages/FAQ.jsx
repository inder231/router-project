import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading
} from "@chakra-ui/react";
const FAQ = () => {
  return (
    <div>
      <Heading>Frequently asked questions</Heading>
      <hr/><br/>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is this project about.
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            This is a react routing project.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How to use react routing.
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            1. Install react-router-dom <br/>
            2. Wrap the application within BrowserRouter. <br/>
            3. import Routes Route  where you want to use and use.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Syntax for using Routes.
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Use Routes and inside it declare particular Route.<br/>
            set path and give element as the component with it directs to.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
