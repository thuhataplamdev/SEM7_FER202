import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import Navbar from "./components/Navbar";
import PizzaListt from "./pages/PizzaListt";
import BookTable from "./pages/BookTable";
import AboutUs from "./pages/AboutUs";
import PizzaDetails from "./pages/PizzaDetails";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroCarousel />
              <div className="App">
                <PizzaListt />
              </div>
            </>
          } />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<BookTable />} />
          <Route path="/pizza/:id" element={ <PizzaDetails /> } />
        </Routes>
        <Footer
          myProfile={{
            name: "Thu Hà",
            avt: "/images/avt.jpg",
            email: "thuha140105@gmail.com",
          }}
        />
      </>
    </Router>
  );
}

export default App;