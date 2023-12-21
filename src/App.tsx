import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Flex justify="space-between" align="center">
          <Box bg="green" w="120px" h="150px">
            Je suis la boite 1
          </Box>
          <Box bg="red" w="120px" h="150px">
            Je suis la boite 2
          </Box>
          <Box bg="blue" w="120px" h="150px">
            Je suis la boite 3
          </Box>
          <Box bg="yellow" w="120px" h="150px">
            Je suis la boite 4
          </Box>
        </Flex>
      </ChakraProvider>
    </div>
  );
}

export default App;
