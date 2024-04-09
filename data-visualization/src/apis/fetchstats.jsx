import axios from "axios";

const FetchBattingStats = async (props) => {
  const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${props.id}/batting`;
  const options = {
    method: "GET",
    url: url,
    headers: {
      "X-RapidAPI-Key": "e39c0d1f71msh07e4aa1430637f4p10a29ejsn4ae4f12940f6 ",
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
    url: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/8733/bowling",
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
