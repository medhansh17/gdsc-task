import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarGraph from "../charts/bargraph.component";
import "./player.styles.css";
import {
  BattingResponsiveRadar,
  BowlingResponsiveRadar,
} from "../charts/radialgraph.component";
import { FetchBattingStats, FetchBowlingStats } from "../../apis/fetchstats";
import MyResponsiveRadialBar from "../charts/radialbar.component";

export default function Player() {
  const { id } = useParams();
  const [battingData, setBattingData] = useState(null);
  const [bowlingData, setBowlingData] = useState(null);

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
          // Store bowling data in local storage
          localStorage.setItem(
            `${id}_bowlingData`,
            JSON.stringify(response.data)
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
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
      <div className="gridContainer">
        <div className="card span8">
          {battingData ? (
            <BarGraph data={battingData} />
          ) : (
            <p>Couldn't fetch data</p>
          )}
        </div>
        <div className="card span4">
          {battingData && bowlingData && (
            <MyResponsiveRadialBar
              battingData={battingData}
              bowlingData={bowlingData}
            />
          )}
        </div>
        <div className="card span6">
          {battingData ? (
            <BattingResponsiveRadar data={battingData} />
          ) : (
            <p>Couldn't fetch data</p>
          )}
        </div>
        <div className="card span6">
          {bowlingData ? (
            <BowlingResponsiveRadar data={bowlingData} />
          ) : (
            <p>Couldn't fetch data</p>
          )}
        </div>
      </div>
    </div>
  );
}
