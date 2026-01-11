import { HashRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Comedy from "./pages/Comedy";
import Lesson from "./pages/Lesson";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Top from "./components/Buttons/Top";
import ScrollToTop from "./components/Divers/ScrollToTop";
import CGU from "./pages/CGU";
import PolConf from "./pages/PolConf";

function App() {
  return (
 <HashRouter>
      <ScrollToTop />
      <div id="top"></div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-representations" element={<Comedy />} />
        <Route path="/nos-cours" element={<Lesson />} />
        <Route path="/a-propos-de-nous" element={<About />} />
        <Route path="/nous-contacter" element={<Contact />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/politique-confidentialite" element={<PolConf />} />
      </Routes>
      <Footer />
      <Top />
    </HashRouter>
  )
}

export default App
