import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Error from "./pages/Error";
import Products from "./pages/Products/Products";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Home/BlogComponent";
import ScrollUp from "./components/Scroll Up/ScrollUp";
import Blogs from "./pages/Blogs/Blogs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Set the animation duration to 1200ms (1.2 seconds)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)

      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ScrollUp />
      <div className="app-inside">
        <Routes>
          <Route index element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/view-products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* <Route path="/category/:categoryName" element={<Category />} /> */}

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
