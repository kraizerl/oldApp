import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Preferences from "./pages/Preferences";
import Map from "./pages/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} className="h-full" />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/map" element={<Map />} />
        </Routes>
        <Link to="/map" className="p-3 bg-black text-offwhite rounded-lg">
          MAP BUTTON
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
