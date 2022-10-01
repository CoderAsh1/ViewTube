import React, { useState } from "react";
import "../Styles/Navbar/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [param, setParam] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (param) {
      navigate(`/search/${param}`);
      setParam("");
    }
  }
  return (
    <div className="navbar">
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h5>VIEWTUBE</h5>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={param}
          onChange={(e) => setParam(e.target.value)}
          id="search"
          placeholder="Search"
        />
        <BiSearch className="bisearch" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Navbar;
