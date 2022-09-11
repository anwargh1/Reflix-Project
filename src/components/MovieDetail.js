import React, { Component } from "react";
import "../styles/moviedetail.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class MovieDetail extends Component {
  render() {
    const match = this.props.match.match.params.id;
    let movies = this.props.movies.find((m) => m.id == match);
    console.log(movies);
    return (
        <Link to="/catalog">
      <div id="movie-detail">
        <h3>{movies.title}</h3>
        <div> {movies.year}</div>
        <img src={movies.img} alt="h" />
        <div className="descr-short">{movies.descrShort}</div>
      </div></Link>
    );
  }
}

export default MovieDetail;
