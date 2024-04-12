import { FaIdCard } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";
import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { TableView } from "../Table/table";
import { CardView } from "../Card/card";
import styles from "./dashboard.module.css";
import classNames from "classnames";
import { useDashboard } from "../Context/DashBoardContext";

export const Dashboard = () => {
  const {
    inputValue,
    filteredData,
    viewType,
    toggleViewType,
    handleSearchName,
    handleSortByName,
    handleSortByAge,
    sortDirectionName,
    sortDirectionAge,
  } = useDashboard();

  return (
    <Box className={styles.dashBoxContainer}>
      <Flex
        sx={{
          gap: "10px",
          flexDir: "column",
          align: "center",
          justifyContent: "center",
          w: "full",
        }}
      >
        <Input
          value={inputValue}
          placeholder="Search in Name"
          onChange={handleSearchName}
          className={styles.searchInputBgColor}
          sx={{ bg: "#ffffff" }}
        />
        {inputValue && (
          <Flex className={styles.filteredResultsBanner}>
            You are viewing Filtered Results!
          </Flex>
        )}
        <Button
          className={classNames(
            styles.viewToggleButton,
            styles.viewToggleButton
          )}
          sx={{
            bg: "152e73",
            color: "white",
            "&:hover": {
              bg: "#152e73",
              color: "#f7c544",
            },
          }}
          onClick={toggleViewType}
          leftIcon={viewType === "table" ? <FaIdCard /> : <FaTable />}
        >
          Switch to {viewType === "table" ? "Card" : "Table"} View
        </Button>
      </Flex>
      {viewType === "table" ? (
        <Box className={styles.carBoxContainer}>
          <TableView
            filteredData={filteredData}
            handleSortByName={handleSortByName}
            handleSortByAge={handleSortByAge}
            sortDirectionName={sortDirectionName}
            sortDirectionAge={sortDirectionAge}
          />
        </Box>
      ) : (
        <Box className={styles.carBoxContainer}>
          <CardView
            filteredData={filteredData}
            handleSortByName={handleSortByName}
            handleSortByAge={handleSortByAge}
            sortDirectionName={sortDirectionName}
            sortDirectionAge={sortDirectionAge}
          />
        </Box>
      )}
    </Box>
  );
};
