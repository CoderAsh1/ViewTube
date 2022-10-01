import "./App.css";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import { Routes, Route } from "react-router-dom";
import SearchFeed from "./Components/SearchFeed";
import Sidebar from "./Components/Sidebar";
import VideoPlayer from "./Components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Feed q="Latest" />} />
        <Route path="/latest" element={<Feed q="latest" />} />
        <Route exact path="/crypto" element={<Feed q="crypto" />} />
        <Route exact path="/coding" element={<Feed q="coding" />} />
        <Route exact path="/news" element={<Feed q="news" />} />
        <Route exact path="/music" element={<Feed q="music" />} />
        <Route exact path="/fitness" element={<Feed q="fitness" />} />
        <Route exact path="/gaming" element={<Feed q="gaming" />} />
        <Route exact path="/sport" element={<Feed q="sport" />} />
        <Route exact path="/movies" element={<Feed q="movies" />} />
        <Route exact path="/learn" element={<Feed q="learn" />} />
        <Route exact path="/live" element={<Feed q="live" />} />
        <Route exact path="/search/:id" element={<SearchFeed />} />
        <Route exact path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
