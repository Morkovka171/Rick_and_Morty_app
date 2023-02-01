import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import SApp from "./styles/SApp";
import 'normalize.css';

const App = () => {
  return (
    <SApp.Wrapper>
      <SApp.Container>
        <Header />
        <Home />
      </SApp.Container>
    </SApp.Wrapper>
  );
};

export default App;
