import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return(
    <div> react app
      <Router>
        <Header/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  ); 
};

export default App;
