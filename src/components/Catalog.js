import React, { Component } from "react";
import Movie from "./Movie";
import "../styles/Catalog.css";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: "",
      budget: 15,
    };
  }
  editBudget = (number) => {
    this.setState({
      budget: this.state.budget + number,
    });
  };
  handeInput = (event) => {
    this.setState({
      inputSearch: event.target.value,
    });
  };

  getRented = () => {
    let rentedMovies = this.props.movies.filter((m) => m.isRented);
    console.log(rentedMovies);
    if (rentedMovies.length > 0) {
      return (
        <div>
          Rented :
          {rentedMovies.map((m) => (
            <Movie
              movies={m}
              toggleRented={this.props.toggleRented}
              budget={this.state.budget}
              editBudget={this.editBudget}
            />
          ))}
        </div>
      );
    }
  };

  render() {
    let movies = this.props.movies;
    console.log(movies);
    return (
      <div id="catalog">
        <input
          type="text"
          placeholder="Search"
          onChange={this.handeInput}
          value={this.state.inputSearch}
        />
        {this.getRented()}

        <div> Budget :{this.state.budget} </div>
        <hr />
        <h3>Catalog : </h3>
        {movies
          .filter((movie) =>
            movie.title
              .toLowerCase()
              .includes(this.state.inputSearch.trim().toLowerCase())
          )
          .map((m) => {
            return (
              <Movie
                movies={m}
                toggleRented={this.props.toggleRented}
                budget={this.state.budget}
                editBudget={this.editBudget}
              />
            );
          })}
      </div>
    );
  }
}

export default Catalog;
