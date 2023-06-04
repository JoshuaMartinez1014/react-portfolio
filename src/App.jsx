import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import "./App.css";
import "./styles/global.css";

function App() {
  const border = {
    borderBottom: "2px solid white",
  };

  return (
    <>
      <Header />
      <AboutMe />
      <div style={border}></div>
      <Footer />
    </>
  );
}

export default App;
