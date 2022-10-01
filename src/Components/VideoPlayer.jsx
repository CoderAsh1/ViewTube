import React, { useState, useEffect } from "react";
import "../Styles/VideoPlayer/videoplayer.css";
import { useParams } from "react-router-dom";
import fetch from "../fetchVideoDetail";
import fetchDownloadLink from "../fetchDownloadLink";
import ReactPlayer from "react-player";
import { saveAs } from "file-saver";

const VideoFeed = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [link, setLink] = useState(null);

  async function fetchData() {
    let newdata = await fetch(videoId);
    setVideo(newdata.items[0]);
  }

  async function fetchLink() {
    let newLink = await fetchDownloadLink(videoId);
    setLink(newLink.data.videos.items[1].url);
    // console.log(newLink.data.videos.items);
  }

  function handleDownload() {
    saveAs(link);
  }
  useEffect(() => {
    fetchData();
    fetchLink();
  }, [videoId]);

  return (
    <div className="videoplayer">
      {video && (
        <>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            playing={true}
            className="player"
            height="80%"
            width="100%"
          />
          <div className="flex">
            <div>
              <h1>{video.snippet.title}</h1>
              <br />
              <p className="channel">{video.snippet.channelTitle}</p>
              <span>{video.statistics.viewCount} views</span>
              <span>{video.statistics.likeCount} likes</span>
            </div>
            <button onClick={handleDownload}>Download</button>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoFeed;
