import React from "react";
import {
  Flex,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styles from "./table.module.css";
import classNames from "classnames";

export const TableView = ({
  filteredData,
  handleSortByName,
  handleSortByAge,
}) => {
  return (
    <Flex direction="column" align="center" className={styles.tableContainer}>
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
      <TableContainer>
        <Table className={styles.table}>
          <Thead>
            <Tr className={styles.tableRow}>
              <Th
                className={classNames(styles.tableHeaderRow)}
                sx={{ color: "white" }}
              >
                <Flex>Name </Flex>
              </Th>
              <Th
                className={classNames(styles.tableHeaderRow)}
                sx={{ color: "white" }}
              >
                Age{" "}
              </Th>
              <Th
                className={classNames(styles.tableHeaderRow)}
                sx={{ color: "white" }}
              >
                Occupation
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((obj, i) => {
              return (
                <Tr key={i} className={styles.tableData}>
                  <Td>{obj.name}</Td>
                  <Td isNumeric>{obj.age}</Td>
                  <Td>{obj.occupation}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
