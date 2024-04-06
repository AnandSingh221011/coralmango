import { ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { RenderRoutes } from "./route";

function App() {
  return (
    <ChakraProvider>
      <Flex sx={{ width: "100%", bgColor: "#CCCCCC" }}>
        <Router>
          <RenderRoutes />
        </Router>
      </Flex>{" "}
    </ChakraProvider>
  );
}

export default App;
