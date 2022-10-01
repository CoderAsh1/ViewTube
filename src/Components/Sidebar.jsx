import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Feed/feed.css";
import { FaFire } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { CgGames } from "react-icons/cg";
import { MdSportsKabaddi } from "react-icons/md";
import { MdOutlineLocalMovies } from "react-icons/md";
import { TbBooks } from "react-icons/tb";
import { BsBroadcastPin } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/latest" className="type">
        <span>{<FaFire />}</span>
        <p>Latest</p>
      </Link>
      <Link to="/crypto" className="type">
        <span>{<FaBitcoin />}</span>
        <p>Crypto</p>
      </Link>
      <Link to="/coding" className="type">
        <span>{<FaCode />}</span>
        <p>Coding</p>
      </Link>
      <Link to="/news" className="type">
        <span>{<FaNewspaper />}</span>
        <p>News</p>
      </Link>
      <Link to="/music" className="type">
        <span>{<FaMusic />}</span>
        <p>Music</p>
      </Link>
      <Link to="/fitness" className="type">
        <span>{<CgGym />}</span>
        <p>Fitness</p>
      </Link>
      <Link to="/gaming" className="type">
        <span>{<CgGames />}</span>
        <p>Gaming</p>
      </Link>
      <Link to="/sport" className="type">
        <span>{<MdSportsKabaddi />}</span>
        <p>Sport</p>
      </Link>
      <Link to="/movies" className="type">
        <span>{<MdOutlineLocalMovies />}</span>
        <p>Movies</p>
      </Link>
      <Link to="/learn" className="type">
        <span>{<TbBooks />}</span>
        <p>Learn</p>
      </Link>
      <Link to="/live" className="type">
        <span>{<BsBroadcastPin />}</span>
        <p>Live</p>
      </Link>
    </div>
  );
};

export default Sidebar;
