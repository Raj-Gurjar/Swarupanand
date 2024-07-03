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

function App() {
  
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
