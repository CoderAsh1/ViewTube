import React from "react";
import "../Styles/Search/search.css";
import { useEffect, useState } from "react";
import fetch from "../fetchdata";
import { useParams } from "react-router-dom";
import VideoCard from "../Components/VideoCard";
import ChannleCard from "./ChannelCard";
import spinner from "../Resources/spinner.gif";

const SearchFeed = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const [loading, setLoad] = useState(true);
  async function fetchData() {
    let data = await fetch(id);
    setData(data.items);
  }

  // function handleScroll() {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     loading = true;
  //     page += 1;
  //     getApiData();
  //   }
  // }
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      fetchData();
      setLoad(false);
    }, 1000);
  }, [id]);

  return (
    <div className="searchContent">
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
  );
};

export default SearchFeed;
