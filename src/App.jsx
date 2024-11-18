import { useContext } from "react";
import "./App.css";
import { Home, Colors, Cats, Memory, Ombros, CMS, Inventory, TeaTracker, TermTracker, Appointments } from "./Pages";
import { ThemeContext } from "./Context/theme";
import { Contact, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark" : "light"}>
      {/* <h1 className={`${dark ? "text-midnight" : "text-light-pink"}`}>:)</h1> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/cats" element={<Cats />} />
          <Route path="/projects/ombros" element={<Ombros />} />
          <Route path="/projects/colors" element={<Colors />} />
          <Route path="/projects/memory" element={<Memory />} />
          <Route path="/projects/cms" element={<CMS />} />
          <Route path="/projects/teatimetracker" element={<TeaTracker />} />
          <Route path="/projects/termtracker" element={<TermTracker />} />
          <Route path="/projects/inventory" element={<Inventory />} />
          <Route path="/projects/appointments" element={<Appointments />} />
        </Routes>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
