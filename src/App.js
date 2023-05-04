import React from "react";
import ChatBox from "./components/chatbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:num" element={<ChatBox />} />
      </Routes>
    </Router>
  );
}

export default App;
