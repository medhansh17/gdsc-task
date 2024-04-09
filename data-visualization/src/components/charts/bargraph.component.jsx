import { ResponsiveBar } from "@nivo/bar";

const transformData = (data) => {
  const transformedData = [];
  for (let i = 1; i < data.headers.length; i++) {
    const format = data.headers[i];
    const matches = parseInt(data.values[0].values[i]);
    const innings = parseInt(data.values[1].values[i]);

    const formatData = {
      format: format,
      Matches: matches,
      Innings: innings,
    };
    transformedData.push(formatData);
  }
  return transformedData;
};

// const data = transformData({
//   headers: ["ROWHEADER", "Test", "ODI", "T20", "IPL"],
//   values: [
//     {
//       values: ["Matches", "43", "42", "56", "102"],
//     },
//     {
//       values: ["Innings", "74", "41", "52", "93"],
//     },
//     {
//       values: ["Runs", "2547", "1634", "1831", "3641"],
//     },
//     {
//       values: ["Balls", "4833", "1844", "1285", "2649"],
//     },
//     {
//       values: ["Highest", "199", "112", "110", "132"],
//     },
//     {
//       values: ["Average", "35.38", "46.69", "40.69", "48.55"],
//     },
//     {
//       values: ["SR", "52.7", "88.61", "142.49", "137.45"],
//     },
//     {
//       values: ["Not Out", "2", "6", "7", "18"],
//     },
//     {
//       values: ["Fours", "309", "124", "164", "315"],
//     },
//     {
//       values: ["Sixes", "17", "38", "73", "149"],
//     },
//     {
//       values: ["Ducks", "7", "2", "4", "3"],
//     },
//     {
//       values: ["50s", "13", "10", "16", "28"],
//     },
//     {
//       values: ["100s", "7", "5", "2", "4"],
//     },
//     {
//       values: ["200s", "0", "0", "0", "0"],
//     },
//     {
//       values: ["300s", "0", "0", "0", "0"],
//     },
//     {
//       values: ["400s", "0", "0", "0", "0"],
//     },
//   ],
//   appIndex: {
//     seoTitle: "KL Rahul Profile - Cricbuzz | Cricbuzz.com",
//     webURL: "http://www.cricbuzz.com/profiles/8733/kl-rahul",
//   },
//   seriesSpinner: [
//     {
//       seriesName: "Career",
//     },
//     {
//       seriesId: 4061,
//       seriesName: "Indian Premier League 2022",
//     },
//   ],
// });

export default function BarGraph(props) {
  console.log("Bargraph ", props.data);
  const transformedData = transformData(props.data);
  return (
    <ResponsiveBar
      data={transformedData}
      keys={["Matches", "Innings"]}
      indexBy="format"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Format",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "No. of Matches/Innings",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ theme: "background" }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
}
