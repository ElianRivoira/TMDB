import React from "react";
import { Link } from "react-router-dom";

import searchMoviesIMG from "../assets/images/searchMoviesIMG.jpg";
import searchSeriesIMG from "../assets/images/searchSeriesIMG.jpg";

const Home = () => {
  return (
    <div>
      <section className="section1">
        <div className="section1div1">
          <div className="section1div2">
            <div className="section1div3">
              <div className="title">
                <h1>Welcome!</h1>
                <h3>
                  Millions of movies, TV shows and people to discover. Explore
                  now.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="section2div1">
          <div className="divSearch">
            <Link to="/search/movies" className="search">
              <img
                src={searchMoviesIMG}
                alt="search movies"
                className="imgSearch"
              />
              <h5 className="h5Search">Search Movies</h5>
            </Link>
          </div>
          <div className="divSearch">
            <Link to="/search/tv" className="search">
              <img
                src={searchSeriesIMG}
                alt="search series"
                className="imgSearch"
              />
              <h5 className="h5Search">Search Series</h5>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
