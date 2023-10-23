import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Landing";

import About from "./Components/About";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
