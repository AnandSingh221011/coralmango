import { ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { RenderRoutes } from "./route";
import { DashboardProvider } from "./component/Context/DashBoardContext";
function App() {
  return (
    <ChakraProvider>
      <Flex sx={{ width: "100%", bgColor: "#CCCCCC" }}>
        <Router>
          <DashboardProvider>
            <RenderRoutes />
          </DashboardProvider>
        </Router>
      </Flex>{" "}
    </ChakraProvider>
  );
}

export default App;
