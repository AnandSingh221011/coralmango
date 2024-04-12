import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};

export const DashboardProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [viewType, setViewType] = useState("table");
  const [filteredData, setFilteredData] = useState([]);
  const [sortDirectionName, setSortDirectionName] = useState(null);
  const [sortDirectionAge, setSortDirectionAge] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://coralmango.com/api/react-test"
        );
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearchName = (e) => {
    const searchValue = e.target.value;
    setInputValue(searchValue);
    if (!searchValue) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((obj) =>
        obj.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
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

  const toggleViewType = () => {
    setViewType(viewType === "table" ? "cards" : "table");
  };

  const value = {
    inputValue,
    setInputValue,
    data,
    setData,
    viewType,
    toggleViewType,
    filteredData,
    setFilteredData,
    sortDirectionName,
    handleSortByName,
    sortDirectionAge,
    handleSortByAge,
    handleSearchName,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
