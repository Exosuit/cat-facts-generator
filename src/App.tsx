import React from "react";
import { ChakraProvider, Stack, Text } from "@chakra-ui/react";
import Generator from "./Generator";

const App = () => {
  return (
    <ChakraProvider>
      <Stack
        direction={"column"}
        h={"100vh"}
        p={["0em", "0em", "10%", "10%", "10%"]}
        //bgGradient="linear(to-br, #F7D1CD, #E8C2CA, #D1B3C4, #B392AC, #735D78)"
        bgImage={"/background.webp"}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        gap={0}
      >
        <Stack
          direction={"column"}
          align={"center"}
          justify={"top"}
          mt={"17em"}
          w={"100%"}
          h={"70%"}
          rounded={"3xl"}
          //bgColor={"whiteAlpha.600"}
          backdropFilter={"blur(3px)"}
          gap={0}
        >
          <Generator />
        </Stack>
      </Stack>
    </ChakraProvider>
  );
};

export default App;
