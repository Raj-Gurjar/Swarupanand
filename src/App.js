import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="py-16">
        <Routes>
          <Route index element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/view-products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/category/:categoryName" element={<Category />} /> */}

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
