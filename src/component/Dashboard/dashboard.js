import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaIdCard } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";
import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { TableView } from "../Table/table";
import { CardView } from "../Card/card";
import styles from "./dashboard.module.css";
import classNames from "classnames";

export const Dashboard = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [viewType, setViewType] = useState("table");
  const [filteredData, setFilteredData] = useState([]);
  const [sortDirectionName, setSortDirectionName] = useState(null);
  const [sortDirectionAge, setSortDirectionAge] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://coralmango.com/api/react-test")
        .then((res) => {
          console.log(res);
          setData(res.data);
          setFilteredData(res.data);
        })
        .catch((e) => {
          setData([{ message: "Error in Fetching the Data" }]);
        });
    };
    fetchData();
  }, []);

  const handleSearchName = (e) => {
    setInputValue(e.target.value);
    if (!e.target.value) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((obj) =>
          obj.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const handleSortByName = () => {
    const isAsc = sortDirectionName !== "asc";
    const sortedData = [...filteredData].sort((a, b) => {
      const nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });
    if (!isAsc) sortedData.reverse();
    setFilteredData(sortedData);
    setSortDirectionName(isAsc ? "asc" : "desc");
    setSortDirectionAge(null);
  };

  const handleSortByAge = () => {
    const isAsc = sortDirectionAge !== "asc";
    const sortedData = [...filteredData].sort((a, b) => a.age - b.age);
    if (!isAsc) sortedData.reverse();
    setFilteredData(sortedData);
    setSortDirectionAge(isAsc ? "asc" : "desc");
    setSortDirectionName(null);
  };

  const toggleView = () => {
    setViewType(viewType === "table" ? "cards" : "table");
  };

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
          onClick={toggleView}
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
