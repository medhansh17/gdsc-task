import { ResponsiveRadialBar } from "@nivo/radial-bar";

const transformData = ({ battingData, bowlingData }) => {
  console.log("fired");
  console.log(battingData);
  const battingHeaders = battingData.headers.slice(1);
  const battingValues = battingData.values;
  const bowlingValues = bowlingData.values;
  const data = [];
  battingHeaders.forEach((format, index) => {
    const battingIndex = index + 1;
    const bowlingIndex = index + 1;
    const formatData = {
      id: format.toUpperCase(),
      data: [
        { x: "50s", y: parseInt(battingValues[11].values[battingIndex]) },
        { x: "100s", y: parseInt(battingValues[12].values[battingIndex]) },
        { x: "200s", y: parseInt(battingValues[13].values[battingIndex]) },
        { x: "4w", y: parseInt(bowlingValues[11].values[bowlingIndex]) },
        { x: "5w", y: parseInt(bowlingValues[12].values[bowlingIndex]) },
        { x: "10w", y: parseInt(bowlingValues[13].values[bowlingIndex]) },
      ],
    };
    data.push(formatData);
  });
  return data;
};

const MyResponsiveRadialBar = ({ battingData, bowlingData }) => {
  const data = transformData({ battingData, bowlingData }); // Pass props as an object
  console.log(data);
  return (
    <ResponsiveRadialBar
      data={data}
      valueFormat=">-.2f"
      padding={0.4}
      cornerRadius={2}
      margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: 110,
          translateY: 0,
          itemsSpacing: 6,
          itemDirection: "right-to-left",
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          symbolSize: 16,
          symbolShape: "square",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default MyResponsiveRadialBar;
