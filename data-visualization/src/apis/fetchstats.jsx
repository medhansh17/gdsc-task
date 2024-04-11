import axios from "axios";

const FetchBattingStats = async (props) => {
  const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${props.id}/batting`;
  const options = {
    method: "GET",
    url: url,
    headers: {
      "X-RapidAPI-Key": "7a3040195cmsh824a35c4ae9e8d6p1ff50cjsn73cc8650d54e ",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(
      `Error fetching batting stats for player ${props.id}:`,
      error
    );
    throw error;
  }
};

const FetchBowlingStats = async (props) => {
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${props.id}/bowling`,
    headers: {
      "X-RapidAPI-Key": "e39c0d1f71msh07e4aa1430637f4p10a29ejsn4ae4f12940f6",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { FetchBattingStats, FetchBowlingStats };