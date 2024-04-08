import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./landing.styles.css";
import GetPlayers from "../../apis/getplayers";
import Records from "../records.component";

const response = {
  player: [
    {
      id: "673",
      name: "Janeiro Tucker",
      teamName: "Bermuda",
      faceImageId: "155599",
    },
    {
      id: "674",
      name: "Kwame Tucker",
      teamName: "Bermuda",
      faceImageId: "155488",
    },
    {
      id: "866",
      name: "Tamauri Tucker",
      teamName: "Bermuda",
      faceImageId: "155612",
    },
    {
      id: "7240",
      name: "Rod Tucker",
      teamName: "Australia",
      faceImageId: "182026",
    },
    {
      id: "11123",
      name: "Fiachra Tucker",
      teamName: "Ireland",
      faceImageId: "182026",
    },
    {
      id: "11131",
      name: "Lorcan Tucker",
      teamName: "Ireland",
      faceImageId: "191070",
    },
  ],
  category: "Tucker",
};

export default function Landing() {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("searchValue") || ""
  );
  const [players, setPlayers] = useState(response);

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
