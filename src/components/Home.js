import React from "react";
import { Link, Route } from "react-router-dom";

import Beers from "./Beers";
import NewBeer from "./NewBeer";
import RandomBeer from "./RandomBeer";

import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Route path="/(beers|random-beer|new-beer)">
        <Link to="/">
          <img className="home" src="home.png" alt="home" />
        </Link>
      </Route>
      <div>
        <Route exact path="/">
          <Link to="/beers">
            <Beers />
          </Link>
          <Link to="/random-beer">
            <RandomBeer />
          </Link>
          <Link to="/new-beer">
            <NewBeer />
          </Link>
        </Route>
      </div>
    </>
  );
};

export default Home;
