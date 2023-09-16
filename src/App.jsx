import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      </BrowserRouter>
    </div>
  );
}

export default App;
