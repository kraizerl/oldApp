import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
