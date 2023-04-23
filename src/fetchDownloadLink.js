import axios from "axios";

export default async function fetchLink(videoId) {
  const options = {
    method: "GET",
    url: "https://youtube-media-downloader.p.rapidapi.com/v2/video/details",
    params: { videoId: videoId },
    headers: {
      "X-RapidAPI-Key": "ba87fb649bmshffba27713de7994p1d5558jsn555001b771cb",
      "X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
    },
  };

  let response = await axios.request(options);
  return response;
}
