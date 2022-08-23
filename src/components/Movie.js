import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Movie extends Component {
  toggleRented = () => {
    if (this.props.movies.isRented === false) {
      if (this.props.budget >= 3) {
        this.props.toggleRented(this.props.movies.id);
        this.props.editBudget(-3);
      } else alert("There are insufficient funds");
    } else {
      this.props.toggleRented(this.props.movies.id);
      this.props.editBudget(3);
    }
  };
  render() {
    let movies = this.props.movies;
    return (
      <div className="mini">
        <Link to={`/movies/${movies.id}`}>
          <img src={movies.img} alt="h" />
        </Link>
        <span>{movies.title}</span>
        <div id="is-rented" onClick={this.toggleRented}>
          {movies.isRented ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-dash-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          )}
        </div>
      </div>
    );
  }
}

export default Movie;
