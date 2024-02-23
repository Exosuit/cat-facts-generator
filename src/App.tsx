import React from "react";
import { ChakraProvider, Stack, Text } from "@chakra-ui/react";

const App: React.FC = () => {
  //<QuoteGenerator quote={quote} fetchQuote={fetchQuote} /> quot ya

  return (
    <ChakraProvider>
      <Stack
        direction={"column"}
        h={"100vh"}
        p={"4em"}
        bgGradient="linear(to-br, #F7D1CD, #E8C2CA, #D1B3C4, #B392AC, #735D78)"
      >
        <Stack
          direction={"column"}
          w={"100%"}
          h={"100%"}
          rounded={"3xl"}
          bgColor={"whiteAlpha.600"}
        >
          <Stack direction={"row"} justifyContent={"center"} w={"100%"}>
            <Text>Home</Text>
          </Stack>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
};

export default App;
