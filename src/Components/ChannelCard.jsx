import React from "react";
import "../Styles/VideoCard/videocard.css";
import { Link } from "react-router-dom";

const ChannelCard = ({ title, thumbnail, channelId }) => {
  return (
    <div className="videocard channelcard">
      {/* <Link to={channelId && `./channel/${channelId}`}> */}
      <img className="channelthumbnail" src={thumbnail} alt="" />
      {/* </Link> */}
      <div className="videoDetail">
        <div className="des">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={channelId && `./channel/${channelId}`}
          >
            <h4>{title}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
