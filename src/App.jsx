import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Microsoft365 from "./pages/Microsoft365";
import Teams from "./pages/Teams";
import Copilot from "./pages/Copilot";
import Windows from "./pages/Windows";
import Surface from "./pages/Surface";
import Xbox from "./pages/Xbox";
import Support from "./pages/Support";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/microsoft" element={<Microsoft365 />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/copilot" element={<Copilot />} />
        <Route path="/windows" element={<Windows />} />
        <Route path="/surface" element={<Surface />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
};

export default App;
