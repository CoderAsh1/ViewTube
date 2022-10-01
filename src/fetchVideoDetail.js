import axios from "axios";

export default async function fetch(videoId) {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/videos",
    params: { part: "contentDetails,snippet,statistics", id: videoId },
    headers: {
      "X-RapidAPI-Key": "ba87fb649bmshffba27713de7994p1d5558jsn555001b771cb",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  let response = await axios.request(options);
  let data = await response.data;
  return data;
}
