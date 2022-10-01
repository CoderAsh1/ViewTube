import React from "react";
import "../Styles/VideoCard/videocard.css";
import defaultImg from "../Resources/default.jpg";
import { Link } from "react-router-dom";

const VideoCard = ({ title, channelTitle, thumbnail, videoId, date }) => {
  return (
    <div className="videocard">
      <Link to={videoId && `/video/${videoId}`}>
        <img
          className="thumbnail"
          src={thumbnail ? thumbnail : defaultImg}
          alt=""
        />
      </Link>
      <div className="videoDetail">
        <div className="des">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={videoId && `/video/${videoId}`}
          >
            <h4 title={title}>{title.slice(0, 34) + "..."}</h4>
          </Link>
          <p>{channelTitle}</p>
          <p>Uploaded on {date}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
