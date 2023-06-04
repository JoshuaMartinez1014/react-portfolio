import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import "./App.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Router>
        <div id="page-container">
          <Header />
          <div id="content-wrap">
            <Routes>
              <Route path="/" exact element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contactme" element={<ContactMe />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
