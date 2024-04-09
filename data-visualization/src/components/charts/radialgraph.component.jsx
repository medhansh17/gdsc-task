import { ResponsiveRadar } from "@nivo/radar";

const BattingResponsiveRadar = (props) => {
  const headers = props.data.headers.slice(1);
  const values = props.data.values;

  const radial = headers.map((format, index) => {
    return {
      format: format.toUpperCase(),
      Average: parseInt(values[5].values[index + 1]),
      Highest: parseInt(values[6].values[index + 1]),
      StrikeRate: parseInt(values[7].values[index + 1]),
    };
  });
  return (
    <ResponsiveRadar
      data={radial}
      keys={["Highest", "Average", "StrikeRate"]}
      indexBy="format"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "set1" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
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
const BowlingResponsiveRadar = (props) => {
  const headers = props.data.headers.slice(1);
  const values = props.data.values;

  const radial = headers.map((format, index) => {
    return {
      format: format.toUpperCase(),
      Average: parseInt(values[6].values[index + 1]),
      Economy: parseInt(values[7].values[index + 1]),
      StrikeRate: parseInt(values[8].values[index + 1]),
    };
  });
  return (
    <ResponsiveRadar
      data={radial}
      keys={["Average", "Economy", "StrikeRate"]}
      indexBy="format"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "set1" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
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
export { BattingResponsiveRadar, BowlingResponsiveRadar };
