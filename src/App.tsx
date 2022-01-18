import React from "react";
import "./App.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Burgers from "./components/burgers";
import styled from "styled-components";
import { pages, stateTypes } from "./ts/interfaces";
import { connect } from "react-redux";
import Sauses from "./components/sauses";
import Drinks from "./components/drinks";
import Cart from "./components/cart";
import Footer from "./components/footer";



const AppBlock = styled.div`
  background-color: #fcf155;
  max-width: 1077px;
  margin: 5vh auto;
  height: 600px;
  border: 2px solid black;
`;

const App: React.FC<{ page: string }> = ({ page }) => {
  let pageComponent: {};

  if (page === pages.welcome) {
    pageComponent = <Welcome />;
  } else if (page === pages.burgers) {
    pageComponent = <Burgers />;
  } else if (page === pages.sauses) {
    pageComponent = <Sauses />;
  } else if (page === pages.drinks) {
    pageComponent = <Drinks />;
  } else {
    pageComponent = <Cart />;
  }

  return (
    <AppBlock className="app">
      <Header />
      {pageComponent}
      <Footer/>
    </AppBlock>
  );
};

const mapStateToProps = (state: stateTypes) => {
  return {
    page: state.page,
  };
};

export default connect(mapStateToProps)(App);
