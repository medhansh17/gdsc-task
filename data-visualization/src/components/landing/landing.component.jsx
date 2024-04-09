import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./landing.styles.css";
import GetPlayers from "../../apis/getplayers";
import Records from "../records.component";

export default function Landing() {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("searchValue") || ""
  );
  const [players, setPlayers] = useState(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await GetPlayers({ name: searchValue });
      setPlayers(response);
      console.log(response);
      localStorage.setItem("searchValue", searchValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="hero">
      <div className="searchContainer">
        <Input
          variant="filled"
          placeholder="Search Player Name"
          required
          value={searchValue}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit} className="searchBtn">
          <SearchIcon />
        </button>
      </div>
      {players ? (
        <Records players={players} />
      ) : (
        <div className="msgDiv">Search For A Player</div>
      )}
    </div>
  );
}
