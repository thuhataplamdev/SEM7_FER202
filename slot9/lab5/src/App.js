import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";

// import Home from "./pages/Home";
// import About from "./pages/About";
import News from "./pages/News";
// import Quiz from "./pages/Quizz";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <Home />
              <div className="App">
               
              </div>
            </>
          } />
           {/* <Route path="/about" element={<About/>} /> */}
           <Route path="/news" element={<News />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
