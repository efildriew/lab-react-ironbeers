import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";

import Beers from "./Beers";
import NewBeer from "./NewBeer";
import RandomBeer from "./RandomBeer";

import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Beers />
      <RandomBeer />
      <NewBeer />
    </div>
  );
};

export default Home;
