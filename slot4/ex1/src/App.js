import "./App.css";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import Navbar from "./components/Navbar";
import PizzaListt from "./pages/PizzaListt";
import BookTable from "./components/BookTable";

function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />

      <div className="App">
        <PizzaListt />
        <BookTable />

        <Footer
          myProfile={{
            name: "Thu Hà",
            avt: "/images/avt.jpg",
            email: "thuha140105@gmail.com",
          }}
        />
      </div>
    </>
  );
}

export default App;
