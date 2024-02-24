import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Text, Button } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const Generator = () => {
  const [catFact, setCatFact] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    fetchRandomCatFact();
    setShowButton(true);
  }, []);

  const fetchRandomCatFact = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setCatFact(response.data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  return (
    <Stack
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      direction={"column"}
      align={"center"}
      justify={"center"}
      w={"100%"}
      h={"100%"}
      gap={0}
      pb={"1em"}
    >
      <Stack
        direction={"row"}
        align={"center"}
        bgColor={"whiteAlpha.600"}
        mt={["14em", "14em", "5em", "5em", "5em"]}
        roundedTop={"2xl"}
        gap={0}
      >
        <Text fontWeight={"bold"} fontSize={["xl", "xl", "4xl", "4xl", "4xl"]}>
          Cat Facts Generator
        </Text>
      </Stack>
      <Stack
        direction={"column"}
        align={"center"}
        w={["100%", "100%", "80%", "80%", "80%"]}
        rounded={[null, null, "2xl", "2xl", "2xl"]}
        bgColor={"whiteAlpha.600"}
        h={"16em"}
        gap={0}
        mb={"1em"}
      >
        <AnimatePresence>
          {catFact && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Stack
                rounded={[null, null, "2xl", "2xl", "2xl"]}
                direction={"column"}
                align={"center"}
                w={"100%"}
                gap={0}
                p={"1.5em"}
              >
                <Text
                  fontSize={["xl", "xl", "2xl", "2xl", "2xl"]}
                  overflowY={"scroll"}
                >
                  {catFact}
                </Text>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button onClick={fetchRandomCatFact}>Generate</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  );
};

export default Generator;
