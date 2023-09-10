import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="experience" element={<Experience />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
