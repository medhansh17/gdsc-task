import axios from "axios";

const GetPlayers = async (props) => {
  const options = {
    method: "GET",
    url: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search",
    params: { plrN: props.name },
    headers: {
      "X-RapidAPI-Key": "e39c0d1f71msh07e4aa1430637f4p10a29ejsn4ae4f12940f6",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default GetPlayers;
