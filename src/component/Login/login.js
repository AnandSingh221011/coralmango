import { Button, Box, Flex, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./login.module.css";

const MotionButton = motion(Button);

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 0.95, transition: { duration: 0.1, ease: "easeInOut" } },
};

export const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [loginCred, setloginCred] = useState({
    email: "",
    password: "",
  });
  const preDefinedCred = {
    email: "demo@coralmango.com",
    password: "demo123",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      loginCred.email === preDefinedCred.email &&
      loginCred.password === preDefinedCred.password
    )
      navigate("dashboard");
    else
      toast({
        position: "top",
        status: "error",
        variant: "solid",
        title: "Invalid Credentials",
        description: "The email or password you entered is incorrect.",
        duration: 2500,
        containerStyle: {
          fontWeight: 400,
        },
      });
  };
  return (
    <Box className={styles.loginBoxContainer}>
      <Flex
        as="form"
        onSubmit={handleSubmit}
        className={styles.flexFormContainer}
      >
        <Input
          type="email"
          placeholder="Enter Email"
          value={loginCred.email}
          onChange={(e) =>
            setloginCred((data) => ({ ...data, email: e.target.value }))
          }
          className={styles.elementStyle}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          value={loginCred.password}
          onChange={(e) =>
            setloginCred((data) => ({ ...data, password: e.target.value }))
          }
          className={styles.elementStyle}
        />
        <MotionButton
          type="submit"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          colorScheme="blue"
        >
          Login
        </MotionButton>
      </Flex>
    </Box>
  );
};
