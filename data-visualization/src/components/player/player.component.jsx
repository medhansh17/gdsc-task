import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import html2canvas from "html2canvas";
import BarGraph from "../charts/bargraph.component";
import "./player.styles.css";
import {
  BattingResponsiveRadar,
  BowlingResponsiveRadar,
} from "../charts/radialgraph.component";
import GetInfo from "../../apis/getinfo";
import { FetchBattingStats, FetchBowlingStats } from "../../apis/fetchstats";
import MyResponsiveRadialBar from "../charts/radialbar.component";

export default function Player() {
  const { id } = useParams();
  const [battingData, setBattingData] = useState(null);
  const [bowlingData, setBowlingData] = useState(null);
  const [playerinfo, setPlayerInfo] = useState(null);
  const barRef = useRef(null);
  const radialBarRef = useRef(null);
  const radialgraphRef = useRef(null);
  const radialgraph2Ref = useRef(null);

  async function onShare(canvasRef) {
    const canvas = await html2canvas(canvasRef.current);
    const dataUrl = canvas.toDataURL();
    const blob = await (await fetch(dataUrl)).blob();
    const filesArray = [
      new File([blob], "animation.png", {
        type: blob.type,
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData).then(() => {
      console.log("Shared successfully");
    });
  }

  useEffect(() => {
    const fetchBattingData = async () => {
      try {
        const storedBattingData = localStorage.getItem(`${id}_battingData`);
        if (storedBattingData) {
          setBattingData(JSON.parse(storedBattingData));
        } else {
          const response = await FetchBattingStats({ id });
          setBattingData(response.data);
          localStorage.setItem(
            `${id}_battingData`,
            JSON.stringify(response.data)
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchBowlingData = async () => {
      try {
        const storedBowlingData = localStorage.getItem(`${id}_bowlingData`);
        if (storedBowlingData) {
          setBowlingData(JSON.parse(storedBowlingData));
        } else {
          const response = await FetchBowlingStats({ id });
          setBowlingData(response.data);
          localStorage.setItem(
            `${id}_bowlingData`,
            JSON.stringify(response.data)
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    const getInfo = async () => {
      try {
        const response = await GetInfo({ id });
        setPlayerInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getInfo();
    const storedBattingData = localStorage.getItem(`${id}_battingData`);
    const storedBowlingData = localStorage.getItem(`${id}_bowlingData`);
    if (storedBattingData && storedBowlingData) {
      setBattingData(JSON.parse(storedBattingData));
      setBowlingData(JSON.parse(storedBowlingData));
    } else {
      fetchBattingData();
      fetchBowlingData();
    }
  }, [id]);
  return (
    <div className="playerContainer">
      {playerinfo && (
        <div className="dashboard">
          <div className="imageContainer">
            <img src={playerinfo.image} alt={playerinfo.name} />
          </div>
          <div className="desc">
            <div className="player-info">
              <p className="header">Name</p>
              <h3>{playerinfo.name}</h3>
            </div>
            <div className="player-info">
              <p className="header">Date of Birth:</p>
              <p>{playerinfo.DoB}</p>
            </div>
            <div className="player-info">
              <p className="header">Batting Style:</p>
              <p>{playerinfo.bat}</p>
            </div>
            <div className="player-info">
              <p className="header">Bowling Style:</p>
              <p>{playerinfo.bowl}</p>
            </div>
          </div>
          <button className="goBack">
            <Link
              to={{
                pathname: `/`,
              }}
            >
              Go Back
            </Link>
          </button>
        </div>
      )}
      <div className="gridContainer">
        <div className="card span8" ref={barRef}>
          {battingData ? (
            <>
              <BarGraph data={battingData} />
              <button className="shareButton" onClick={() => onShare(barRef)}>
                <ExternalLinkIcon />
              </button>
            </>
          ) : (
            <p>Couldn't fetch data</p>
          )}
        </div>
        <div className="card span4" ref={radialBarRef}>
          {battingData && bowlingData && (
            <>
              <MyResponsiveRadialBar
                battingData={battingData}
                bowlingData={bowlingData}
              />
              <button
                className="shareButton"
                onClick={() => onShare(radialBarRef)}
              >
                <ExternalLinkIcon />
              </button>
            </>
          )}
        </div>
        <div className="card span6" ref={radialgraphRef}>
          {battingData ? (
            <>
              <BattingResponsiveRadar data={battingData} />
              <button
                className="shareButton"
                onClick={() => onShare(radialgraphRef)}
              >
                <ExternalLinkIcon />
              </button>
            </>
          ) : (
            <p>Couldn't fetch data</p>
          )}
        </div>
        <div className="card span6" ref={radialgraph2Ref}>
          {bowlingData ? (
            <>
              <BowlingResponsiveRadar data={bowlingData} />
              <button
                className="shareButton"
                onClick={() => onShare(radialgraph2Ref)}
              >
                <ExternalLinkIcon />
              </button>
            </>
          ) : (
            <p>Couldn't fetch data</p>
          )}
        </div>
      </div>
    </div>
  );
}
