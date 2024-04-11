import axios from "axios";

const GetInfo = async (props) => {
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${props.id}`,
    headers: {
      "X-RapidAPI-Key": "7a3040195cmsh824a35c4ae9e8d6p1ff50cjsn73cc8650d54e",
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

export default GetInfo;
