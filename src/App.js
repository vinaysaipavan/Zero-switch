import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Mainpage } from "./Mainpage";
import { Documentation } from "./Documentation";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

