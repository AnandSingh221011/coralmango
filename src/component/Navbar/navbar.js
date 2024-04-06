import React from "react";
import { Flex, Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./navbar.module.css";
import classNames from "classnames";

export const Navbar = () => {
  return (
    <Box className={styles.boxContainer}>
      <Flex as="nav" className={styles.navContainer}>
        <UnorderedList
          styleType="none"
          display="flex"
          alignItems="center"
          gap="10rem"
          m="0"
          p="0"
        >
          <ListItem>
            <Link
              as={RouterLink}
              to="/home"
              className={classNames(styles.linkList, styles.linkHover)}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              as={RouterLink}
              to="/dashboard"
              className={classNames(styles.linkList, styles.linkHover)}
            >
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <Link
              as={RouterLink}
              to="/math"
              className={classNames(styles.linkList, styles.linkHover)}
            >
              Math
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Box>
  );
};
