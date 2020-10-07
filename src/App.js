import React from 'react';
import './App.css';
import Header from "./Header-component/Header-component";
import Footer from "./footer-component/footer-component.jsx";
import Carousel from "./carousel-component/carousel-component";

function App() {
  return(
<div className="main-wrapper">
  <Header/>
  <Carousel/>
  <Footer/>
</div>)
}


export default App;
