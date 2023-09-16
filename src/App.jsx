import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Preferences from "./pages/Preferences";
(
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Auth />} className="h-full" />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
export default App;
