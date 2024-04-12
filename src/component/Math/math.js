import React, { useState } from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import styles from "./math.module.css";
import classNames from "classnames";

export const Math = () => {
  const [results, setResults] = useState({
    result1: [],
    result2: [],
    result3: [],
  });

  const calculateResults = () => {
    const a = [1, 3, 5, 2, 4];

    // First Answer
    const result1 = a.filter((element, index) => index % 2 === 0);

    //Second Answer
    const result2 = a.map((element) => element * element);

    //Third Answer
    const result3 = a
      .filter((element, index) => index % 2 === 0)
      .map((element) => element * element);

    setResults({ result1, result2, result3 });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Button
        onClick={calculateResults}
        className={classNames(
          styles.calculateButton,
          styles.calculateButtonHover
        )}
        sx={{
          bg: "152e73",
          color: "white",
          "&:hover": {
            bg: "#152e73",
            color: "#f7c544",
          },
        }}
      >
        Generate Results
      </Button>
      {Object.entries(results).map(([key, value]) =>
        value.length > 0 ? (
          <Box
            key={key}
            className={classNames(styles.resultBox, styles.resultBoxHover)}
          >
            <Text>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value.join(", ")}
            </Text>
          </Box>
        ) : null
      )}
    </VStack>
  );
};
