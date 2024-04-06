import React from "react";
import {
  Icon,
  VStack,
  Heading,
  Text,
  Badge,
  Box,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./card.module.css";
import classNames from "classnames";

export const CardView = ({
  filteredData,
  handleSortByName,
  handleSortByAge,
}) => {
  return (
    <VStack spacing={4} align="stretch">
      <Flex gap={4}>
        <Button
          onClick={handleSortByName}
          className={classNames(styles.sortButton, styles.sortButtonHover)}
          sx={{
            bg: "152e73",
            color: "white",
            "&:hover": {
              bg: "#152e73",
              color: "#f7c544",
            },
          }}
        >
          Sort by Name
        </Button>
        <Button
          onClick={handleSortByAge}
          className={classNames(styles.sortButton, styles.sortButtonHover)}
          sx={{
            bg: "152e73",
            color: "white",
            "&:hover": {
              bg: "#152e73",
              color: "#f7c544",
            },
          }}
        >
          Sort by Age
        </Button>
      </Flex>
      {filteredData.map((obj, index) => (
        <Box
          key={index}
          className={classNames(
            styles.cardContainer,
            styles.cardContainerHover
          )}
        >
          <HStack spacing={4}>
            <Icon as={BsFillPersonFill} boxSize="100px" />
            <VStack align="center" justify="center">
              <Heading size="md">{obj.name}</Heading>
              <Text>{obj.occupation}</Text>
              <Badge colorScheme="green" textAlign="center">
                {obj.age} years
              </Badge>
            </VStack>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};
