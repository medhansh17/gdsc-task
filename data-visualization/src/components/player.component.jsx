import { useEffect } from "react";
import { useParams } from "react-router-dom";

const data = {
  headers: ["ROWHEADER", "Test", "ODI", "T20", "IPL"],
  values: [
    {
      values: ["Matches", "43", "42", "56", "102"],
    },
    {
      values: ["Innings", "74", "41", "52", "93"],
    },
    {
      values: ["Runs", "2547", "1634", "1831", "3641"],
    },
    {
      values: ["Balls", "4833", "1844", "1285", "2649"],
    },
    {
      values: ["Highest", "199", "112", "110", "132"],
    },
    {
      values: ["Average", "35.38", "46.69", "40.69", "48.55"],
    },
    {
      values: ["SR", "52.7", "88.61", "142.49", "137.45"],
    },
    {
      values: ["Not Out", "2", "6", "7", "18"],
    },
    {
      values: ["Fours", "309", "124", "164", "315"],
    },
    {
      values: ["Sixes", "17", "38", "73", "149"],
    },
    {
      values: ["Ducks", "7", "2", "4", "3"],
    },
    {
      values: ["50s", "13", "10", "16", "28"],
    },
    {
      values: ["100s", "7", "5", "2", "4"],
    },
    {
      values: ["200s", "0", "0", "0", "0"],
    },
    {
      values: ["300s", "0", "0", "0", "0"],
    },
    {
      values: ["400s", "0", "0", "0", "0"],
    },
  ],
  appIndex: {
    seoTitle: "KL Rahul Profile - Cricbuzz | Cricbuzz.com",
    webURL: "http://www.cricbuzz.com/profiles/8733/kl-rahul",
  },
  seriesSpinner: [
    {
      seriesName: "Career",
    },
    {
      seriesId: 4061,
      seriesName: "Indian Premier League 2022",
    },
  ],
};

export default function Player() {
  useEffect(() => {
    const transformedData = [];

    // Extract relevant data and transform it into the desired format
    for (let i = 1; i < data.headers.length; i++) {
      const format = data.headers[i];
      const matches = parseInt(data.values[0].values[i]);
      const innings = parseInt(data.values[1].values[i]);
      const runs = parseInt(data.values[2].values[i]);
      const centuries = parseInt(data.values[12].values[i]);
      const doubleCenturies = parseInt(data.values[13].values[i]);

      // Construct an object with the desired format
      const formatData = {
        format: format,
        Matches: matches,
        Innings: innings,
        Runs: runs,
        "100's": centuries,
        "200's": doubleCenturies,
      };

      // Push the object into the transformedData array
      transformedData.push(formatData);
    }
    console.log(transformedData);
  }, []);
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Player</h1>
    </div>
  );
}
