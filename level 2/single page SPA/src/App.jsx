import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/Features" element={<Features/>}/>
         <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
