import { useState } from "react";
import { About, Footer, Header, Testimonial, Work, Skills } from "./Container";
import { Navbar } from "./Components";
import SmallScreenFooter from "./Container/Footer/SmallScreenFooter";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
        <SmallScreenFooter />
      </div>
    </>
  );
}

export default App;
