import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BarGraph from "./components/charts/bargraph.component";
import Landing from "./components/landing/landing.component";
import Player from "./components/player.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/player/:id" element={<Player />} />
    </Routes>
  );
}

export default App;
