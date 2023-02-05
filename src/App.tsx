import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import SApp from "./styles/SApp";
import "normalize.css";
import { Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";

const App = () => {
  return (
    <SApp.Wrapper>
      <SApp.Container>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </SApp.Container>
    </SApp.Wrapper>
  );
};

export default App;
