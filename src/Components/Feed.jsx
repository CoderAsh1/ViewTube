import React from "react";
import fetch from "../fetchdata";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import ChannleCard from "./ChannelCard";
import spinner from "../Resources/spinner.gif";
import "../Styles/Feed/feed.css";

const Feed = ({ q }) => {
  const [data, setData] = useState([]);
  const [loading, setLoad] = useState(true);

  async function fetchData() {
    let data = await fetch(q);
    setData(data.items);
    console.log(data.item);
  }
  console.log(data);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
      fetchData();
      setLoad(false);
    }, 1000);
  }, [q]);

  return (
    <div className="feed">
      <div className="feedContent">
        {data.map((item, i) => (
          <div key={i}>
            {item.id.channelId && !loading && (
              <ChannleCard
                key={i}
                title={item.snippet.title}
                thumbnail={item.snippet.thumbnails.medium.url}
                channelId={item.snippet.channelId}
              />
            )}
            {item.id.videoId && !loading && (
              <VideoCard
                key={i}
                title={item.snippet.title}
                channelTitle={item.snippet.channelTitle}
                thumbnail={item.snippet.thumbnails.medium.url}
                videoId={item.id.videoId}
                date={item.snippet.publishedAt.slice(0, 10)}
              />
            )}
          </div>
        ))}
        {loading && <img src={spinner} className="spinner" />}
      </div>
    </div>
  );
};

export default Feed;
