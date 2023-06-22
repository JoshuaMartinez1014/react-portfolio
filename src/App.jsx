import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import ProjectPage from "./Pages/ProjectPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import "./App.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <div
        id="page-container"
        style={{ backgroundColor: "rgb(254, 255, 248)" }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} index />
            <Route path="/contactme" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
