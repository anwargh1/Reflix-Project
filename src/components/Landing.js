import React, { Component } from "react";
import "../styles/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <h1 id="home-title">WHO'S WATCHING</h1>
        <div id="home-container">
          <div id="Anwar" className="main-directory-text">
            Anwar
          </div>
          <div id="Mai" className="main-directory-text">
            Mai
          </div>
          <div id="Mona" className="main-directory-text">
            Mona
          </div>
          <div id="Yasmmen" className="main-directory-text">
            Yasmmen
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
