import React from "react";
import { Navbar } from "../component/Navbar/navbar";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Flex
        sx={{
          direction: "column",
          pt: "50px",
          minH: "100vh",
          alignItems: "center",
          justifyContent: "center",
          w: "full",
        }}
      >
        <Outlet />
      </Flex>
    </>
  );
};
